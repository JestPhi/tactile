import React, { useEffect, useRef, useState } from "react";
import { Image as ImageIcon, Trash2 } from "react-feather";

import Bar from "../../Bar";
import Button from "../../Button";
import style from "./style.module.css";

const getImage = (image: File | string) => {
  if (typeof image === "object") {
    const blob = new Blob([image], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  }
  // Return image path - consumers can configure the base URL in their app
  return image;
};

interface InputImageProps {
  className?: string;
  onChange?: (file: File | string | null) => void;
  removePlaceholder?: string | null;
  selectPlaceholder?: string | null;
  value?: File | string | null;
  variant?: "default" | "square" | "avatar" | "small" | "large";
}

const InputImage = ({
  className,
  onChange = () => {},
  value = null,
  removePlaceholder,
  selectPlaceholder = null,
  variant = "default",
}: InputImageProps) => {
  const didMount = useRef(false);
  const [imageFileState, setImageFileState] = useState<File | string | null>(
    value
  );
  const inputRef = useRef<HTMLInputElement>(null);

  // Set imageFileState to value on mount/when value changes
  useEffect(() => {
    setImageFileState(value);
  }, [value]);

  useEffect(() => {
    if (didMount.current) {
      onChange(imageFileState);
    }
    didMount.current = true;
  }, [imageFileState, onChange]);

  return (
    <div
      className={[
        style.inputImage,
        style[variant],
        "inputImage",
        className,
      ].join(" ")}
    >
      {imageFileState && (
        <img
          className={style.img}
          src={getImage(imageFileState)}
          alt="Selected image"
        />
      )}
      {imageFileState && (
        <Bar className={style.bar}>
          {removePlaceholder && (
            <Button
              variant="secondary"
              onClick={() => {
                setImageFileState(null);
              }}
            >
              {removePlaceholder}
              <Trash2 size={18} className="ml6" />
            </Button>
          )}
        </Bar>
      )}
      {!imageFileState && (
        <button
          className="align-items w-full h-full border-none bg-none flex justify-center items-center"
          onClick={() => inputRef.current?.click()}
        >
          <ImageIcon color="#222" height={24} width={24} />
          {selectPlaceholder && (
            <span className="m-8">{selectPlaceholder}</span>
          )}
        </button>
      )}
      <input
        className={style.input}
        id="input"
        type="file"
        accept="image/*;capture=camera"
        onChange={async (event) => {
          const file = event.target.files?.[0];
          if (file) {
            try {
              setImageFileState(file);
            } catch (error) {
              console.error(error);
            }
          }
        }}
        ref={inputRef}
      />
    </div>
  );
};

export default React.memo(InputImage);

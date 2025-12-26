import "../../styles/util.css";
import InputImage from "./index";

export const variants = {
  default: (
    <div style={{ width: "300px", height: "200px" }}>
      <InputImage selectPlaceholder="Select Image" />
    </div>
  ),

  withRemoveButton: (
    <div style={{ width: "300px", height: "200px" }}>
      <InputImage selectPlaceholder="Select Image" removePlaceholder="Remove" />
    </div>
  ),

  square: (
    <div style={{ width: "200px", height: "200px" }}>
      <InputImage selectPlaceholder="Upload" removePlaceholder="Remove" />
    </div>
  ),

  avatar: (
    <div
      style={{
        width: "96px",
        height: "96px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <InputImage removePlaceholder="Remove" />
    </div>
  ),

  small: (
    <div style={{ width: "150px", height: "150px" }}>
      <InputImage selectPlaceholder="+" removePlaceholder="×" />
    </div>
  ),

  large: (
    <div style={{ width: "600px", height: "400px" }}>
      <InputImage
        selectPlaceholder="Click to upload image"
        removePlaceholder="Remove Image"
      />
    </div>
  ),

  withCustomClass: (
    <div style={{ width: "300px", height: "200px" }}>
      <InputImage
        className="rounded-16 border-2"
        selectPlaceholder="Select Image"
        removePlaceholder="Remove"
      />
    </div>
  ),
};

const SIZE_MAP = {
  SM: "h-36 w-36",
  LG: "h-96 w-96",
} as const;

type SizeType = keyof typeof SIZE_MAP;

const Avatar = ({
  basePath = "",
  className = "",
  parameters = "",
  username = "",
  src,
  size = "SM",
}: {
  basePath: string;
  className?: string;
  parameters?: string;
  username?: string;
  src?: string;
  size?: SizeType;
}) => {
  return src ? (
    <img
      className={[
        "object-fit",
        `${SIZE_MAP[size]}`,
        "rounded-full",
        className,
      ].join(" ")}
      src={`${basePath}/${src}${parameters}`}
      alt="User avatar"
      data-component="Avatar"
    />
  ) : (
    <span
      className={[
        "rounded-full flex justify-center items-center text-white bg-black font-semibold",
        `${SIZE_MAP[size]}`,
        className,
      ].join(" ")}
      data-component="Avatar"
    >
      {username.charAt(0)}
    </span>
  );
};

export default Avatar;

declare const SIZE_MAP: {
    readonly SM: "h-36 w-36";
    readonly LG: "h-96 w-96";
};
type SizeType = keyof typeof SIZE_MAP;
declare const Avatar: ({ basePath, className, parameters, username, src, size, }: {
    basePath: string;
    className?: string;
    parameters?: string;
    username?: string;
    src?: string;
    size?: SizeType;
}) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
//# sourceMappingURL=index.d.ts.map
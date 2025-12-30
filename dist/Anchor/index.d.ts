import { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
type AnchorProps = {
    children?: ReactNode;
    className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;
declare const Anchor: ({ children, className, ...rest }: AnchorProps) => import("react/jsx-runtime").JSX.Element;
export default Anchor;
//# sourceMappingURL=index.d.ts.map
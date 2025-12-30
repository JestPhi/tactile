import { ReactNode } from 'react';
interface ModalProps {
    visible: boolean;
    onClose?: () => void;
    children: ReactNode;
    height?: string;
}
declare const Modal: ({ visible, onClose, children, height, }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
//# sourceMappingURL=index.d.ts.map
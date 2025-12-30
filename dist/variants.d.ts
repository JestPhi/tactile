export { variants as ButtonVariants } from './Button/index.variants';
export { variants as BarVariants } from './Bar/index.variants';
export { variants as DropdownVariants } from './Dropdown/index.variants';
export { variants as FormFieldVariants } from './Inputs/FormField/index.variants';
export { variants as InputTextVariants } from './Inputs/Text/index.variants';
export { variants as InputImageVariants } from './Inputs/Image/index.variants';
export * from './index';
/**
 * VariantSelector - Use the Dropdown component to select variants
 */
interface VariantSelectorProps {
    variants: Record<string, React.ReactNode>;
    componentName: string;
    onSelect?: (variantKey: string) => void;
}
export declare const VariantSelector: ({ variants, componentName, onSelect, }: VariantSelectorProps) => boolean;
//# sourceMappingURL=variants.d.ts.map
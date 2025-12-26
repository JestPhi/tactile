/**
 * Global preview configuration
 * This file is loaded by preview extensions to inject styles
 */

// Import built CSS from dist folder (bundled by esbuild)
import "./dist/index.css";
import { useState } from "react";
import Dropdown from "./Dropdown";

// Re-export all component variants
export { variants as ButtonVariants } from "./Button/index.variants";
export { variants as BarVariants } from "./Bar/index.variants";
export { variants as DropdownVariants } from "./Dropdown/index.variants";
export { variants as FormFieldVariants } from "./Inputs/FormField/index.variants";
export { variants as InputTextVariants } from "./Inputs/Text/index.variants";
export { variants as InputImageVariants } from "./Inputs/Image/index.variants";

// Re-export all components
export * from "./index";

/**
 * VariantSelector - Use the Dropdown component to select variants
 */
interface VariantSelectorProps {
  variants: Record<string, React.ReactNode>;
  componentName: string;
  onSelect?: (variantKey: string) => void;
}

export const VariantSelector = ({
  variants,
  componentName,
  onSelect,
}: VariantSelectorProps) => {
  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(variants)[0]
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedVariant(value);
    onSelect?.(value);
  };

  return (
    <div className="flex flex-col gap-16 w-full">
      <div className="flex items-center gap-16">
        <span className="font-semibold">{componentName}</span>
        <Dropdown
          value={selectedVariant}
          onChange={handleChange}
          className="flex-1"
        >
          {Object.keys(variants).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Dropdown>
      </div>
      <div className="p-24 bg-gray rounded-md">{variants[selectedVariant]}</div>
    </div>
  );
};

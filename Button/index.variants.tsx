import Button from "./index";

export const variants = {
  default: (
    <Button>
      <span>Primary Button</span>
    </Button>
  ),

  disabled: (
    <Button disabled>
      <span>Disabled Button</span>
    </Button>
  ),

  loading: (
    <Button disabled>
      <span>Loading...</span>
    </Button>
  ),

  withCustomClass: (
    <Button className="w-full">
      <span>Full Width Button</span>
    </Button>
  ),

  small: (
    <Button className="h-24 pl-12 pr-12 pt-4 pb-4 text-xs">
      <span>Small Button</span>
    </Button>
  ),

  large: (
    <Button className="h-48 pl-24 pr-24 pt-12 pb-12 text-lg">
      <span>Large Button</span>
    </Button>
  ),

  withIcon: (
    <Button className="gap-8">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 5v14m7-7H5" />
      </svg>
      <span>Add Item</span>
    </Button>
  ),

  iconOnly: (
    <Button className="w-32 p-0" aria-label="Add">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 5v14m7-7H5" />
      </svg>
    </Button>
  ),
};

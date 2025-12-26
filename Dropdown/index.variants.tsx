import "../styles/util.css";
import Dropdown from "./index";

export const variants = {
  default: (
    <Dropdown>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Dropdown>
  ),

  withPlaceholder: (
    <Dropdown placeholder="Select an option..." defaultValue="">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </Dropdown>
  ),

  withError: (
    <Dropdown error placeholder="Select country..." defaultValue="">
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </Dropdown>
  ),

  disabled: (
    <Dropdown disabled>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Dropdown>
  ),

  withValue: (
    <Dropdown defaultValue="medium">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </Dropdown>
  ),

  grouped: (
    <Dropdown placeholder="Choose a fruit...">
      <optgroup label="Citrus">
        <option value="orange">Orange</option>
        <option value="lemon">Lemon</option>
        <option value="lime">Lime</option>
      </optgroup>
      <optgroup label="Berries">
        <option value="strawberry">Strawberry</option>
        <option value="blueberry">Blueberry</option>
        <option value="raspberry">Raspberry</option>
      </optgroup>
    </Dropdown>
  ),

  withCustomClass: (
    <Dropdown className="bg-gray rounded-md" defaultValue="2">
      <option value="1">Priority 1</option>
      <option value="2">Priority 2</option>
      <option value="3">Priority 3</option>
    </Dropdown>
  ),
};

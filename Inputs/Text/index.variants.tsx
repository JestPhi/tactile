import "../../styles/util.css";
import InputText from "./index";

export const variants = {
  default: <InputText id="username" placeholder="Enter username..." />,

  required: (
    <InputText id="fullname" placeholder="Enter your full name..." required />
  ),

  disabled: (
    <InputText id="disabled" placeholder="This field is disabled" disabled />
  ),

  withValue: (
    <InputText
      id="firstname"
      defaultValue="John"
      placeholder="Enter first name..."
    />
  ),
};

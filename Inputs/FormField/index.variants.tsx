import InputText from "../Text";
import FormField from "./index";

export const variants = {
  default: (
    <FormField label="Username" id="username-input">
      <InputText id="username-input" placeholder="Enter username..." />
    </FormField>
  ),

  withHelper: (
    <FormField
      label="Email"
      helperText="We'll never share your email"
      id="email-input"
    >
      <InputText
        id="email-input"
        type="email"
        placeholder="Enter email address..."
      />
    </FormField>
  ),

  withError: (
    <FormField
      label="Password"
      error="Password must be at least 8 characters"
      id="password-input"
    >
      <InputText
        id="password-input"
        type="password"
        placeholder="Enter password..."
      />
    </FormField>
  ),

  required: (
    <FormField label="Full Name" required id="fullname-input">
      <InputText id="fullname-input" placeholder="Enter your full name..." />
    </FormField>
  ),

  disabled: (
    <FormField label="Disabled Field" id="disabled-input">
      <InputText
        id="disabled-input"
        placeholder="This field is disabled"
        disabled
      />
    </FormField>
  ),

  withValue: (
    <FormField label="First Name" id="firstname-input">
      <InputText
        id="firstname-input"
        defaultValue="John"
        placeholder="Enter first name..."
      />
    </FormField>
  ),

  search: (
    <FormField
      label="Search"
      helperText="Use keywords to find what you're looking for"
      id="search-input"
    >
      <InputText
        id="search-input"
        type="search"
        placeholder="Search users, profiles..."
      />
    </FormField>
  ),

  phone: (
    <FormField label="Phone Number" required id="phone-input">
      <InputText id="phone-input" type="tel" placeholder="(123) 456-7890" />
    </FormField>
  ),

  url: (
    <FormField
      label="Website"
      helperText="Must start with https://"
      id="url-input"
    >
      <InputText id="url-input" type="url" placeholder="https://example.com" />
    </FormField>
  ),

  compact: (
    <FormField label="City" containerClassName="gap-2" id="city-input">
      <InputText id="city-input" placeholder="Enter city..." />
    </FormField>
  ),
};

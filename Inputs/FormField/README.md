# FormField Component

A purely accessible wrapper for form inputs that provides label, error message, and helper text support. The actual input control (InputText, Textarea, etc.) is passed as a child. Includes all necessary ARIA attributes for screen readers and validation states.

## Basic Usage

```tsx
import FormField from '@/tactile/FormField';
import InputText from '@/tactile/Inputs/Text';

function MyForm() {
  return (
    <FormField label="Username" id="username">
      <InputText id="username" placeholder="Enter username..." />
    </FormField>
  );
}
```

## Props

- `id?: string` - ID for the input (auto-generated if not provided)
- `label?: ReactNode` - Input label text
- `error?: ReactNode` - Error message (sets aria-invalid="true")
- `helperText?: ReactNode` - Helper text below input
- `required?: boolean` - Marks input as required (displays asterisk)
- `containerClassName?: string` - Additional classes for wrapper div
- `children: ReactNode` - Input control (InputText, Textarea, etc.)

## Features

### Accessibility
- **Proper label association** via `htmlFor` attribute
- **Auto-generated IDs** if not provided
- **ARIA attributes** for validation states
- **aria-describedby** linking to error and helper text
- **aria-invalid** for error states
- **Required indicator** with visual and semantic marking

### Validation
- Visual error state
- Error messages with `aria-describedby`
- Helper text for guidance
- Required field indicator

## Variants

### Default
Basic input with label:
```tsx
<FormField label="Username" id="username">
  <InputText id="username" placeholder="Enter username..." />
</FormField>
```

### With Helper
Input with helper text:
```tsx
<FormField
  label="Email"
  helperText="We'll never share your email"
  id="email"
>
  <InputText id="email" type="email" placeholder="Enter email address..." />
</FormField>
```

### With Error
Input showing validation error:
```tsx
<FormField
  label="Password"
  error="Password must be at least 8 characters"
  id="password"
>
  <InputText id="password" type="password" placeholder="Enter password..." />
</FormField>
```

### Required
Required input field with asterisk:
```tsx
<FormField label="Full Name" required id="fullname">
  <InputText id="fullname" placeholder="Enter your full name..." />
</FormField>
```

### Disabled
Disabled input state:
```tsx
<FormField label="Disabled Field" id="disabled">
  <InputText id="disabled" placeholder="This field is disabled" disabled />
</FormField>
```

### With Value
Pre-filled input:
```tsx
<FormField label="First Name" id="firstname">
  <InputText id="firstname" defaultValue="John" placeholder="Enter first name..." />
</FormField>
```

### Search Input
Search-specific input:
```tsx
<FormField
  label="Search"
  helperText="Use keywords to find what you're looking for"
  id="search"
>
  <InputText id="search" type="search" placeholder="Search users, profiles..." />
</FormField>
```

### Phone Input
Phone number input:
```tsx
<FormField label="Phone Number" required id="phone">
  <InputText id="phone" type="tel" placeholder="(123) 456-7890" />
</FormField>
```

### URL Input
URL input with helper:
```tsx
<FormField
  label="Website"
  helperText="Must start with https://"
  id="url"
>
  <InputText id="url" type="url" placeholder="https://example.com" />
</FormField>
```

### Compact Input
Smaller spacing variant:
```tsx
<FormField
  label="City"
  containerClassName="gap-2"
  id="city"
>
  <InputText id="city" placeholder="Enter city..." />
</FormField>
```

## Using Different Input Controls

### With Textarea

```tsx
import Textarea from '@/tactile/Inputs/Textarea';

<FormField label="Bio" id="bio">
  <Textarea id="bio" placeholder="Tell us about yourself..." />
</FormField>
```

### With Custom Component

```tsx
<FormField label="Custom Input" id="custom">
  <MyCustomInput id="custom" />
</FormField>
```

## Styling

The component uses utility classes for styling. Customize with:

1. **Container styling via `containerClassName`:**
   ```tsx
   <FormField 
     label="Email"
     containerClassName="gap-8"
     id="email"
   >
     <InputText id="email" type="email" />
   </FormField>
   ```

2. **Input styling via the child component's `className`:**
   ```tsx
   <FormField label="Email" id="email">
     <InputText 
       id="email" 
       type="email"
       className="background-gray-50"
     />
   </FormField>
   ```

## Form Integration

### With React Hook Form

```tsx
import { useForm, Controller } from 'react-hook-form';
import FormField from '@/tactile/FormField';
import InputText from '@/tactile/Inputs/Text';

export function MyForm() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '' }
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field }) => (
          <FormField 
            label="Email"
            error={errors.email?.message}
            required
            id="email"
          >
            <InputText 
              {...field}
              id="email"
              type="email"
              placeholder="Enter email..."
            />
          </FormField>
        )}
      />
    </form>
  );
}
```

### With Zod Validation

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormField from '@/tactile/FormField';
import InputText from '@/tactile/Inputs/Text';

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
});

export function MyForm() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormField
        label="Username"
        error={errors.username?.message}
        required
        id="username"
      >
        <InputText
          {...register('username')}
          id="username"
          placeholder="Enter username..."
        />
      </FormField>
      <FormField
        label="Email"
        error={errors.email?.message}
        required
        id="email"
      >
        <InputText
          {...register('email')}
          id="email"
          type="email"
          placeholder="Enter email..."
        />
      </FormField>
    </form>
  );
}
```

## Accessibility Best Practices

- **Always provide a label** for context
- **Use `id` prop** to link label to input
- **Use semantic `type` attribute** (email, tel, url, etc.)
- **Provide helper text** for non-obvious fields
- **Show error messages** clearly with visual and textual cues
- **Mark required fields** with the `required` prop
- **Let the component generate IDs** if you don't provide them

## Related Components

- **InputText** - Unstyled text input
- **Textarea** - For multiline text input
- **InputImage** - For image uploads

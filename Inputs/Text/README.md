# Input Component

A convenience wrapper that combines FormField with InputText for simple text input forms. Wraps InputText with proper accessibility labels, error messages, and helper text.

For more flexible form field layouts, use **FormField** directly with any input component.

## Basic Usage

```tsx
import Input from '@/tactile/Inputs/Input';

function MyForm() {
  return (
    <Input 
      label="Username" 
      id="username"
      placeholder="Enter username..." 
    />
  );
}
```

## Props

- `id?: string` - Input ID (auto-generated if not provided)
- `label?: ReactNode` - Input label text
- `error?: ReactNode` - Error message (sets aria-invalid="true")
- `helperText?: ReactNode` - Helper text below input
- `required?: boolean` - Marks input as required (displays asterisk)
- `containerClassName?: string` - Additional classes for wrapper div
- `placeholder?: string` - Placeholder text
- `type?: string` - Input type (default: "text")
- `disabled?: boolean` - Disable the input
- `defaultValue?: string` - Pre-filled input value

## Simple Integration

### With React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import Input from '@/tactile/Inputs/Input';

export function MyForm() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: { username: '' }
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Input
        {...register('username')}
        label="Username"
        id="username"
        placeholder="Enter username..."
        error={errors.username?.message}
        required
      />
    </form>
  );
}
```

## For Advanced Use Cases

If you need to use a different input component (Textarea, custom inputs) or have more complex layouts, use **FormField** instead:

```tsx
import FormField from '@/tactile/FormField';
import Textarea from '@/tactile/Inputs/Textarea';

<FormField label="Bio" id="bio">
  <Textarea id="bio" placeholder="Tell us about yourself..." />
</FormField>
```

## Variants

All standard input types are supported. See variants for examples including:
- Default text input
- Email, search, tel, url inputs
- Required fields
- Error states
- Helper text
- Disabled states
- Pre-filled values

## Related Components

- **FormField** - Flexible wrapper for any input type
- **InputText** - Unstyled text input
- **Textarea** - For multiline text input

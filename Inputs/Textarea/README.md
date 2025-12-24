# InputTextarea Component Specification

## Overview

A customizable textarea element with edit mode styling support. Extends standard HTML textarea functionality with optional edit mode visual treatment.

## Purpose

Flexible textarea input with controlled styling for edit and view modes.

## Interface

```typescript
interface TextareaProps {
  isEditMode?: boolean; // Enable edit mode styling
  className?: string; // Additional CSS classes
  value?: string; // Current textarea value
  placeholder?: string; // Placeholder text
  // ... all standard HTML textarea attributes
}
```

### Standard HTML Attributes

Supports all standard HTML textarea attributes:

- `value`: Current textarea value
- `onChange`: Change event handler
- `placeholder`: Placeholder text
- `rows`: Number of visible text rows
- `cols`: Visible width in characters
- `disabled`: Disable the textarea
- `readOnly`: Make textarea read-only
- `maxLength`: Maximum character length
- `name`: Form field name
- `id`: Element ID
- `className`: Additional CSS classes
- And all other standard textarea attributes

## Features

### Element Reference

- Supports forwarding references to the underlying textarea DOM element
- Useful for focus management, scroll control, and imperative DOM operations

### Styling System

See **[STYLING.md](../../../STYLING.md)** for complete app-wide styling documentation including CSS modules, theming, and customization options.

## Visual States

### Default Mode

- Borderless appearance
- Minimal padding
- Full width/height

### Edit Mode

- Visible border
- Rounded corners
- Enhanced container spacing

See **[STYLING.md](../../../STYLING.md)** for detailed visual specifications and CSS properties.

## Usage Examples

### Basic Usage

```html
<textarea
  class="textarea"
  value="Some text"
  placeholder="Enter text here"
></textarea>
```

### Edit Mode

```html
<textarea
  class="textarea editMode"
  value="Some text"
  placeholder="Enter text here"
></textarea>
```

### With Custom Styling

```html
<textarea
  class="textarea custom-textarea"
  placeholder="Enter text here"
  rows="10"
></textarea>
```

### Read-only Display

```html
<textarea
  class="textarea"
  value="Display text"
  readonly
  placeholder="No text available"
></textarea>
```

## Implementation Guide

### HTML Structure

The component renders a standard HTML `<textarea>` element with dynamic class names.

### Styling

See **[STYLING.md](../../../STYLING.md)** for complete CSS module documentation, class management, and theming options.

## Accessibility Considerations

### Recommended Attributes

```html
<textarea
  class="textarea"
  placeholder="Enter description"
  aria-label="Description input"
  id="description"
></textarea>
```

### Label Association

```html
<label for="description">Description</label>
<textarea class="textarea" id="description" placeholder="Enter text"></textarea>
```

## Common Use Cases

1. **Story/Page Text Input** - User-generated content creation
2. **Comment/Reply Forms** - User feedback collection
3. **Description Fields** - Product/profile descriptions
4. **Notes/Messages** - Free-form text entry
5. **Multi-line Form Fields** - Address, biography, etc.

## Related Components

- **InputImage** - Companion component for image uploads
- **InputText** - Single-line text input variant
- **Button** - Often used together in forms

## Future Enhancements

1. **Character Counter** - Show remaining characters for `maxLength`
2. **Auto-resize** - Expand height based on content
3. **Rich Text Support** - Markdown or WYSIWYG editing
4. **Validation States** - Error/success styling
5. **Dark Mode** - Theme-aware color schemes

# Bar Component

Bar is a 48px-tall horizontal flex container for navigation, toolbars, and action bars. It ensures consistent height and layout across the application.

## When to Use

- Navigation bars at the top of pages
- Toolbars with action buttons
- Status bars for notifications
- Tab bars for view switching
- Any horizontal layout needing fixed height

## When Not to Use

- Vertical layouts (use Stack/Column)
- Complex headers (use Header component)
- Variable-height content
- Simple inline elements

## Best Practices

### Content

- Keep content concise
- Balance elements visually
- Use consistent spacing
- Limit number of actions
- Consider mobile responsiveness

### Styling

- Use className for custom styles
- Prefer utility classes over inline styles
- Ensure color contrast
- Maintain padding in children

### Composition Patterns

**Navigation bar**
Logo, links, and user menu

```tsx
<Bar>
  <Logo />
  <NavLinks />
  <UserMenu />
</Bar>
```

**Action toolbar**
Toolbar with actions

```tsx
<Bar className="border-b">
  <Button>Save</Button>
  <Button>Cancel</Button>
  <Spacer />
  <IconButton icon="more" />
</Bar>
```

**Status bar**
Status/notification bar

```tsx
<Bar className="bg-info">
  <Icon name="info" />
  <Text>Changes saved</Text>
</Bar>
```

## Accessibility

### ARIA Roles

**navigation**
For navigation bars

```tsx
<Bar role="navigation" aria-label="Main navigation">
```

**toolbar**
For toolbars

```tsx
<Bar role="toolbar" aria-label="Document actions">
```

**banner**
For site headers

```tsx
<Bar role="banner" aria-label="Site header">
```

**none**
No role for generic containers

### Keyboard

- Container is not focusable
- Children are focusable
- Tab order: left-to-right
- Provide keyboard shortcuts for actions if needed
- Use tabindex="-1" on the container if not interactive

### Screen Reader

- Announced as a generic container with its children
- Labeling is required
- Use semantic elements: nav, header, toolbar

Example:

```tsx
<Bar role="navigation" aria-label="Primary">
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
</Bar>
```

### Contrast

- Text: 4.5:1 (WCAG AA)
- Icons: 3:1 (WCAG AA)
- Focus Indicator: Visible on all interactive children

### Requirements

- All interactive children must be keyboard accessible
- Provide visible focus indicators
- Don't rely solely on color for meaning
- Test with screen readers
- Maintain heading hierarchy within Bar
- Don't trap focus within Bar
- Test with high contrast and dark themes

## Responsive

Bar remains 48px tall at all breakpoints.

### Considerations

- Content should wrap or overflow on small screens
- Show/hide elements responsively
- Use responsive utility classes

## Performance

### Characteristics

- Lightweight, minimal re-renders
- Class name filtering on each render

### Optimizations

- Use React.memo for complex children
- Avoid new object/array props on each render

## Testing

### Scenarios

- Test with various content
- Verify keyboard navigation
- Validate color contrast
- Test responsiveness
- Check className composition

### Tools

- Screen readers
- Browser DevTools
- Contrast checkers
- Keyboard-only testing

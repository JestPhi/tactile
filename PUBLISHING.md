# Publishing Guide for @stella/tactile

This guide will help you publish the Tactile Design System to npm so others can use it in their projects.

## Pre-Publishing Checklist

### 1. Update Package Metadata

Before publishing, update these fields in [package.json](package.json):

```json
{
  "name": "@stella/tactile", // Update @stella to your npm org or remove @ for public package
  "version": "1.0.0", // Use semantic versioning
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/tactile" // Update with your repo URL
  }
}
```

### 2. Test the Build

```bash
npm run build
```

Verify that the `dist` folder contains:

- `index.js` (CommonJS)
- `index.mjs` (ESM)
- `index.d.ts` (TypeScript types)
- `styles/` directory with all CSS files

### 3. Test Locally

Test the package locally before publishing:

```bash
# In the tactile directory
npm pack

# This creates a .tgz file that you can install in another project
cd /path/to/test-project
npm install /path/to/tactile/@stella-tactile-1.0.0.tgz
```

## Publishing to npm

### First Time Setup

1. **Create an npm account**: Visit [npmjs.com](https://www.npmjs.com/signup)

2. **Login to npm via CLI**:

   ```bash
   npm login
   ```

3. **For scoped packages (@stella/tactile)**: Ensure you have access to the organization or remove the scope.

### Publish the Package

1. **Ensure you're on the correct version**:

   ```bash
   npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
   npm version minor  # for new features (1.0.0 -> 1.1.0)
   npm version major  # for breaking changes (1.0.0 -> 2.0.0)
   ```

2. **Build the package** (automatically runs via prepublishOnly):

   ```bash
   npm run build
   ```

3. **Publish to npm**:

   ```bash
   npm publish
   ```

   For scoped packages, use:

   ```bash
   npm publish --access public
   ```

### Verify Publication

1. Check your package on npm: `https://www.npmjs.com/package/@stella/tactile`
2. Try installing it in a test project:
   ```bash
   npm install @stella/tactile
   ```

## Using the Published Package

Once published, users can install and use your design system:

### Installation

```bash
npm install @stella/tactile
```

### Usage

```tsx
import { Button, FormField, InputText } from "@stella/tactile";
import "@stella/tactile/styles";

function App() {
  return (
    <div>
      <FormField label="Email" id="email">
        <InputText type="email" id="email" />
      </FormField>
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Updating the Package

When you make changes:

1. **Update the version**:

   ```bash
   npm version patch  # or minor/major
   ```

2. **Commit the changes**:

   ```bash
   git add .
   git commit -m "Release v1.0.1"
   git push
   ```

3. **Publish**:
   ```bash
   npm publish
   ```

## Best Practices

1. **Semantic Versioning**: Follow [semver](https://semver.org/)

   - MAJOR: Breaking changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes

2. **Changelog**: Maintain a CHANGELOG.md to document changes

3. **Git Tags**: Version commits are automatically tagged by `npm version`

4. **Testing**: Always test thoroughly before publishing

5. **Beta Releases**: Use tags for pre-releases:
   ```bash
   npm version prerelease --preid=beta  # 1.0.0-beta.0
   npm publish --tag beta
   ```

## Troubleshooting

### "Package name already exists"

- Choose a different name or use a scoped package (@yourorg/tactile)

### "You do not have permission to publish"

- Ensure you're logged in: `npm whoami`
- For scoped packages, verify org access or use `--access public`

### "Cannot find module after installation"

- Check the `exports` field in package.json
- Verify build output in dist folder

### TypeScript types not working

- Ensure `types` field points to correct .d.ts file
- Check that declaration files are included in the dist folder

## CI/CD Integration

Consider setting up automated publishing with GitHub Actions:

```yaml
# .github/workflows/publish.yml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

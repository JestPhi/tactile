#!/usr/bin/env node

/**
 * Documentation Checker
 * Reminds developers to update documentation when code changes
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(color, message) {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

// Get all component folders
function getComponents() {
  const items = fs.readdirSync(__dirname, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory())
    .filter(item => !['node_modules', 'dist', 'styles', 'utils', 'Inputs', '.git', '.vscode'].includes(item.name))
    .map(item => item.name);
}

// Get exported components from index.ts
function getExportedComponents() {
  const indexPath = path.join(__dirname, 'index.ts');
  const content = fs.readFileSync(indexPath, 'utf-8');
  
  const exports = [];
  const exportRegex = /export\s+\{\s*default\s+as\s+(\w+)\s*\}/g;
  let match;
  
  while ((match = exportRegex.exec(content)) !== null) {
    exports.push(match[1]);
  }
  
  return exports;
}

// Check if component is documented in README
function isComponentDocumented(componentName) {
  const readmePath = path.join(__dirname, 'README.md');
  const content = fs.readFileSync(readmePath, 'utf-8');
  return content.includes(componentName);
}

// Get CSS variables from variables.css
function getCSSVariables() {
  const varsPath = path.join(__dirname, 'styles', 'variables.css');
  const content = fs.readFileSync(varsPath, 'utf-8');
  
  const variables = [];
  const varRegex = /--[\w-]+:/g;
  let match;
  
  while ((match = varRegex.exec(content)) !== null) {
    variables.push(match[0].slice(0, -1)); // Remove trailing ':'
  }
  
  return [...new Set(variables)]; // Remove duplicates
}

// Check if CSS variable is documented
function isCSSVariableDocumented(varName) {
  const cssDocsPath = path.join(__dirname, 'CSS_VARIABLES.md');
  if (!fs.existsSync(cssDocsPath)) return false;
  
  const content = fs.readFileSync(cssDocsPath, 'utf-8');
  return content.includes(varName);
}

// Main check function
function checkDocumentation() {
  log('blue', '\n📚 Checking documentation...\n');
  
  let hasIssues = false;
  
  // Check components
  const components = getComponents();
  const exportedComponents = getExportedComponents();
  
  log('yellow', '🔍 Checking Components:\n');
  
  // Check for unexported components
  const unexported = components.filter(c => !exportedComponents.includes(c));
  if (unexported.length > 0) {
    hasIssues = true;
    log('red', '❌ Components not exported in index.ts:');
    unexported.forEach(c => console.log(`   - ${c}`));
    console.log();
  }
  
  // Check for undocumented components
  const undocumented = exportedComponents.filter(c => !isComponentDocumented(c));
  if (undocumented.length > 0) {
    hasIssues = true;
    log('red', '❌ Components not documented in README.md:');
    undocumented.forEach(c => console.log(`   - ${c}`));
    console.log();
  }
  
  if (unexported.length === 0 && undocumented.length === 0) {
    log('green', '✅ All components are exported and documented!\n');
  }
  
  // Check CSS variables
  log('yellow', '🎨 Checking CSS Variables:\n');
  
  const cssVars = getCSSVariables();
  const undocumentedVars = cssVars.filter(v => !isCSSVariableDocumented(v));
  
  if (undocumentedVars.length > 0) {
    hasIssues = true;
    log('red', '❌ CSS Variables not in CSS_VARIABLES.md:');
    undocumentedVars.slice(0, 10).forEach(v => console.log(`   - ${v}`));
    if (undocumentedVars.length > 10) {
      console.log(`   ... and ${undocumentedVars.length - 10} more`);
    }
    console.log();
  } else {
    log('green', '✅ All CSS variables are documented!\n');
  }
  
  // Summary
  if (hasIssues) {
    log('yellow', '\n📝 ACTION ITEMS:\n');
    console.log('Please update the following before committing:\n');
    
    if (unexported.length > 0) {
      console.log('1. Export components in index.ts');
    }
    if (undocumented.length > 0) {
      console.log('2. Document components in README.md');
    }
    if (undocumentedVars.length > 0) {
      console.log('3. Update CSS_VARIABLES.md with new variables');
    }
    
    console.log('\n💡 Tip: Run this script before building or committing!\n');
    process.exit(1);
  } else {
    log('green', '\n✨ Documentation is up to date!\n');
  }
}

// Run the check
try {
  checkDocumentation();
} catch (error) {
  log('red', `\n❌ Error: ${error.message}\n`);
  process.exit(1);
}

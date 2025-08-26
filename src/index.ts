#!/usr/bin/env node

import { spawn } from 'child_process';

// Load the proxy first
import './proxy.js';

// Pass through all command line arguments
const args = process.argv.slice(2);

// Import and run the official package directly in the same process
// This ensures our proxy is active when the official code runs
try {
  // Load the official package directly in the same process
  const { createRequire } = await import('module');
  const require = createRequire(import.meta.url);
  
  // Find the official package entry point
  const officialPkgPath = require.resolve('@upstash/context7-mcp/package.json');
  const officialPkg = require(officialPkgPath);
  const officialMainPath = require.resolve('@upstash/context7-mcp/' + officialPkg.bin['context7-mcp']);
  
  // Import and execute the official main file
  await import(officialMainPath);
} catch (error) {
  console.error('Failed to load @upstash/context7-mcp:', error);
  process.exit(1);
}
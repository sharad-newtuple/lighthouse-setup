#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Testing Lighthouse CI setup...\n');

try {
  // Check if lighthouserc.js exists
  if (!fs.existsSync('lighthouserc.js')) {
    throw new Error('❌ lighthouserc.js not found');
  }
  console.log('✅ Lighthouse config file found');

  // Check if @lhci/cli is installed
  try {
    execSync('npx lhci --version', { stdio: 'pipe' });
    console.log('✅ Lighthouse CI CLI is available');
  } catch (error) {
    console.log('⚠️  Lighthouse CI CLI not found - run "npm install" first');
  }

  // Test build
  console.log('\n🔨 Testing build process...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');

  console.log('\n🎉 Lighthouse CI setup is ready!');
  console.log('\nTo test locally, run:');
  console.log('  npm run lighthouse');
  console.log('\nTo test with upload (for CI), run:');
  console.log('  npm run lighthouse:ci');

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

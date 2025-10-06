# Lighthouse CI/CD Setup

This repository has been configured with Lighthouse CI/CD to automatically test web performance, accessibility, best practices, and SEO on every push to any branch.

## 🚀 What's Included

- **Lighthouse CI Configuration** (`my-app/lighthouserc.js`)
- **GitHub Actions Workflow** (`.github/workflows/lighthouse.yml`)
- **Performance Budgets** with strict thresholds
- **Core Web Vitals** monitoring
- **Automated CI/CD** on all branches

## 📊 Performance Thresholds

The Lighthouse CI is configured with the following performance budgets:

- **Performance**: ≥ 80
- **Accessibility**: ≥ 90  
- **Best Practices**: ≥ 80
- **SEO**: ≥ 80

### Core Web Vitals
- **First Contentful Paint**: ≤ 2000ms
- **Largest Contentful Paint**: ≤ 2500ms
- **Cumulative Layout Shift**: ≤ 0.1
- **Speed Index**: ≤ 3000ms
- **Total Blocking Time**: ≤ 300ms

## 🛠️ Local Testing

### Install Dependencies
```bash
cd my-app
npm install
```

### Test Lighthouse Setup
```bash
npm run test:lighthouse
```

### Run Lighthouse Locally
```bash
# Basic Lighthouse test
npm run lighthouse

# Lighthouse test with upload (for CI)
npm run lighthouse:ci
```

## 🔄 CI/CD Workflow

The GitHub Actions workflow will:

1. **Trigger** on every push to any branch
2. **Install** dependencies and build the app
3. **Run** Lighthouse CI with performance budgets
4. **Fail** the build if thresholds are not met
5. **Upload** results as artifacts

## 📁 Files Added/Modified

- `my-app/package.json` - Added Lighthouse CI dependency and scripts
- `my-app/lighthouserc.js` - Lighthouse CI configuration
- `.github/workflows/lighthouse.yml` - GitHub Actions workflow
- `my-app/test-lighthouse.js` - Local testing script

## 🎯 How It Works

1. **Developer pushes code** to any branch
2. **GitHub Actions triggers** the Lighthouse workflow
3. **App is built** using `npm run build`
4. **Lighthouse tests** are run against the built app
5. **Results are checked** against performance budgets
6. **Build passes/fails** based on thresholds
7. **Results are uploaded** as artifacts

## 🔧 Configuration

### Adjusting Performance Thresholds

Edit `my-app/lighthouserc.js` to modify the performance budgets:

```javascript
assertions: {
  'categories:performance': ['error', { minScore: 0.8 }], // Change 0.8 to your desired score
  // ... other assertions
}
```

### Disabling for Specific Branches

To disable Lighthouse CI for certain branches, modify `.github/workflows/lighthouse.yml`:

```yaml
on:
  push:
    branches: [ 'main', 'develop' ]  # Only run on specific branches
```

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**: Check that your app builds successfully with `npm run build`
2. **Lighthouse timeouts**: Increase timeout in `lighthouserc.js`
3. **Performance scores too low**: Optimize your app or adjust thresholds

### Debug Locally

```bash
# Check if Lighthouse CI is working
npm run test:lighthouse

# Run with verbose output
npx lhci autorun --verbose
```

## 📈 Monitoring

- **GitHub Actions** tab shows workflow runs
- **Artifacts** contain detailed Lighthouse reports
- **Pull Request comments** (if configured) show performance changes

## 🔗 Useful Links

- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Scoring](https://web.dev/performance-scoring/)

---

**Note**: This setup is configured for testing purposes. For production use, consider:
- Setting up Lighthouse CI Server for historical data
- Configuring GitHub App tokens for PR comments
- Adding more sophisticated performance budgets

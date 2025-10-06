export default {
  ci: {
    collect: {
      // Build the app first
      buildCommand: 'npm run build',
      // Serve the built app
      startServerCommand: 'npm run preview',
      // Wait for server to be ready
      startServerReadyPattern: 'Local:',
      // Number of times to run Lighthouse
      numberOfRuns: 3,
      // URL to test
      url: ['http://localhost:4173'],
    },
    assert: {
      // Performance budget
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.8 }],
        // Core Web Vitals
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'speed-index': ['error', { maxNumericValue: 3000 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
      },
    },
    upload: {
      // Only upload on main branch or when explicitly requested
      target: 'temporary-public-storage',
    },
  },
};

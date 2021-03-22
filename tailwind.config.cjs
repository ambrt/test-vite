const plugins =
  process.env.NODE_ENV === 'production'
    ? [
      '@tailwindcss/forms',
      '@tailwindcss/typography',
      'postcss-preset-env',
      'cssnano'
    ]
    : [
      '@tailwindcss/forms',
      '@tailwindcss/typography',
      'postcss-preset-env',
      'cssnano'
    ];
module.exports = {
  dark: "class",
  future: {
  },
  experimental: {
  },
  purge: [
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.css',
    './src/**/*.svelte',
    './src/**/*.html'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      spacing: {
        '2/3': '66.666667%',
        '3/5': '74.666667%'
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh"
      }
    },
    variants: {},
    plugins,
  }
}

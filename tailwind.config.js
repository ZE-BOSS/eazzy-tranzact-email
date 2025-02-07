module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      // Disable container queries for email compatibility
      container: false,
    },
    important: true, // Force style precedence
}
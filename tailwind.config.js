module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Trust-building blue
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        // Secondary colors - Growth-oriented green
        secondary: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
          DEFAULT: "#059669", // emerald-600
        },
        // Accent colors - Attention-directing red
        accent: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
          DEFAULT: "#DC2626", // red-600
        },
        // Background colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
        },
        // Status colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          800: "#065F46", // emerald-800
          DEFAULT: "#10B981", // emerald-500
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          800: "#92400E", // amber-800
          DEFAULT: "#F59E0B", // amber-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          800: "#991B1B", // red-800
          DEFAULT: "#EF4444", // red-500
        },
      },
      fontFamily: {
        // Headings - Inter for contemporary professionalism
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        // Body text - Source Sans Pro for extended reading
        body: ['Source Sans Pro', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Captions - Roboto for supporting information
        caption: ['Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        // Data - JetBrains Mono for structured information
        mono: ['JetBrains Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Fluid typography using clamp
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      },
      boxShadow: {
        // Layered elevation system
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'moderate': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'prominent': '0 8px 24px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        // Gentle, approachable edges
        'card': '8px',
        'button': '4px',
      },
      spacing: {
        // 8px grid system
        'grid-1': '8px',
        'grid-2': '16px',
        'grid-3': '24px',
        'grid-4': '32px',
        'grid-5': '40px',
        'grid-6': '48px',
        'grid-7': '56px',
        'grid-8': '64px',
        'grid-9': '72px',
        'grid-10': '80px',
      },
      transitionDuration: {
        // Animation timing system
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
        'ease-out': 'ease-out',
        'linear': 'linear',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'skeleton': 'skeleton-loading 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'skeleton-loading': {
          '0%': { 'background-position': '-200px 0' },
          '100%': { 'background-position': 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
}
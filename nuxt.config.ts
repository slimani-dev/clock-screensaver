// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const appName = 'Clock ScreenSaver';
const appShortName = 'Clock';
const description = 'A customizable digital clock screen saver with multiple fonts, styles, and display options. Features various digital clock faces and transitions for a modern, retro, or minimalist look.';
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      title: appName,
      meta: [
        {
          name: 'description',
          content: description
        }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ]
    }
  },
  devtools: {enabled: true},
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    "@vite-pwa/nuxt"
  ],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    server: {
      allowedHosts: ['clock.test']
    },
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    classSuffix: ''
  },

  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: appName,
      short_name: appShortName,
      description: description,
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },

  fonts: {
    experimental: {
      // Defines whether to enable adding local fallbacks. Default is `false`.
      disableLocalFallbacks: true
    },
    families: [
      {name: 'Share Tech Mono', provider: 'google'},
      {name: 'VT323', provider: 'google'},
      {name: 'Orbitron', provider: 'google'},
      {name: 'Nova Mono', provider: 'google'},
      {name: 'Source Code Pro', provider: 'google'},
      {name: 'UnifontEX', provider: 'fontsource'},
      {name: 'Workbench', provider: 'fontsource'},
      {name: 'Kola', provider: 'fontshare'},
      {name: 'Styro', provider: 'fontshare'},
      {name: 'Array', provider: 'fontshare'},
      {name: 'Technor', provider: 'fontshare'},
      {name: 'Nippo', provider: 'fontshare'},

      {name: "Calculator", src: "/fonts/Calculator.ttf"},
      {name: "Chuck Chillout", src: "/fonts/ChuckChillout.ttf"},
      {name: "delia Black", src: "/fonts/delibl__.ttf"},
      {name: "delia", src: "/fonts/delirg__.ttf"},
      {name: "DISPLAY TFB", src: "/fonts/DISPLAYFREETFB.ttf"},
      {name: "Energized", src: "/fonts/Energized.ttf"},
      {name: "HydrogenType", src: "/fonts/hydrogen.ttf"},
      {name: "JD DigiSquare", src: "/fonts/jd_digisquare.ttf"},
      {name: "LED Calculator", src: "/fonts/LEDCalculator.ttf"},
      {name: "LED Dot-Matrix", src: "/fonts/LEDDot-Matrix.ttf"},
      {name: "Pica Hole - MRT", src: "/fonts/PICAHMR_.ttf"},
      {name: "Pica Hole - MRST", src: "/fonts/PICAHMS_.ttf"},
      {name: "Pica Hole - Grids", src: "/fonts/PICGRID_.ttf"},
      {name: "Pica Hole - ABS", src: "/fonts/PICHABS_.ttf"},
      {name: "Pica Hole - SIM", src: "/fonts/PICHSIM_.ttf"},
      {name: "Pica Hole - XPL", src: "/fonts/PICHXPL_.ttf"},
      {name: "Pica Hole - 1890 Morse", src: "/fonts/PICMOR__.ttf"},
      {name: "Retro Party", src: "/fonts/retro_party.ttf"},
      {name: "Seven Segment", src: "/fonts/SevenSegment.ttf"},
      {name: "Squarodynamic 01", src: "/fonts/Squarodynamic01.ttf"},
      {name: "Squarodynamic 02", src: "/fonts/Squarodynamic02.ttf"},
      {name: "Squarodynamic 03", src: "/fonts/Squarodynamic03.ttf"},
      {name: "Squarodynamic 04", src: "/fonts/Squarodynamic04.ttf"},
      {name: "Squarodynamic 05", src: "/fonts/Squarodynamic05.ttf"},
      {name: "Squarodynamic 06", src: "/fonts/Squarodynamic06.ttf"},
      {name: "Squarodynamic 07", src: "/fonts/Squarodynamic07.ttf"},
      {name: "Squarodynamic 08", src: "/fonts/Squarodynamic08.ttf"},
      {name: "Squarodynamic 09", src: "/fonts/Squarodynamic09.ttf"},
      {name: "Squarodynamic 10", src: "/fonts/Squarodynamic10.ttf"},
      {name: "Atomic Clock Radio", src: "/fonts/ATOMICCLOCKRADIO.TTF"},
      {name: "Back to 1982", src: "/fonts/BACKTO1982.TTF"},
      {name: "Digitek", src: "/fonts/DIGITEK.TTF"},
      {name: "DS-Digital Bold", src: "/fonts/DS-DIGIB.TTF"},
      {name: "DS-Digital Italic", src: "/fonts/DS-DIGII.TTF"},
      {name: "DS-Digital", src: "/fonts/DS-DIGI.TTF"},
      {name: "DS-Digital Bold Italic", src: "/fonts/DS-DIGIT.TTF"}
    ]
  },
})

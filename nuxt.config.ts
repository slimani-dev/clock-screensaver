// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const appName = 'Clock ScreenSaver';
const appShortName = 'Clock';
const description = 'A customizable digital clock screen saver with multiple fonts, styles, and display options. Features various digital clock faces and transitions for a modern, retro, or minimalist look.';
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

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
        {rel: 'icon', type: 'image/x-icon', href: `${baseURL}/favicon.ico`},
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
    '@vite-pwa/nuxt'
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
      theme_color: '#000000',
      background_color: '#000000',
      icons: [
        {
          src: `${baseURL}/pwa-192x192.png`,
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: `${baseURL}/pwa-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: `${baseURL}/pwa-512x512.png`,
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
      {name: 'Share Tech Mono', provider: 'google', preload: true},
      {name: 'VT323', provider: 'google', preload: true},
      {name: 'Orbitron', provider: 'google', preload: true},
      {name: 'Nova Mono', provider: 'google', preload: true},
      {name: 'Source Code Pro', provider: 'google', preload: true},
      {name: 'UnifontEX', provider: 'fontsource', preload: true},
      {name: 'Workbench', provider: 'fontsource', preload: true},
      {name: 'Kola', provider: 'fontshare', preload: true},
      {name: 'Styro', provider: 'fontshare', preload: true},
      {name: 'Array', provider: 'fontshare', preload: true},
      {name: 'Technor', provider: 'fontshare', preload: true},
      {name: 'Nippo', provider: 'fontshare', preload: true},
      {name: 'Calculator', src: '/fonts/Calculator.ttf', preload: true},
      {name: 'Chuck Chillout', src: '/fonts/ChuckChillout.ttf', preload: true},
      {name: 'delia Black', src: '/fonts/delibl__.ttf', preload: true},
      {name: 'delia', src: '/fonts/delirg__.ttf', preload: true},
      {name: 'DISPLAY TFB', src: '/fonts/DISPLAYFREETFB.ttf', preload: true},
      {name: 'Energized', src: '/fonts/Energized.ttf', preload: true},
      {name: 'HydrogenType', src: '/fonts/hydrogen.ttf', preload: true},
      {name: 'JD DigiSquare', src: '/fonts/jd_digisquare.ttf', preload: true},
      {name: 'LED Calculator', src: '/fonts/LEDCalculator.ttf', preload: true},
      {name: 'LED Dot-Matrix', src: '/fonts/LEDDot-Matrix.ttf', preload: true},
      {name: 'Seven Segment', src: '/fonts/SevenSegment.ttf', preload: true},
      {name: 'LCDDot TR', src: '/fonts/lcddot_tr.woff2', preload: true},
    ]
  },
  icon: {
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [
        'mdi-weather-night',
        'mdi-weather-sunny'
      ],
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    },
  },
})

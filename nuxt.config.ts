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
      theme_color: '#ffffff',
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
      {name: 'Calculator', src: '/fonts/Calculator.ttf'},
      {name: 'Chuck Chillout', src: '/fonts/ChuckChillout.ttf'},
      {name: 'delia Black', src: '/fonts/delibl__.ttf'},
      {name: 'delia', src: '/fonts/delirg__.ttf'},
      {name: 'DISPLAY TFB', src: '/fonts/DISPLAYFREETFB.ttf'},
      {name: 'Energized', src: '/fonts/Energized.ttf'},
      {name: 'HydrogenType', src: '/fonts/hydrogen.ttf'},
      {name: 'JD DigiSquare', src: '/fonts/jd_digisquare.ttf'},
      {name: 'LED Calculator', src: '/fonts/LEDCalculator.ttf'},
      {name: 'LED Dot-Matrix', src: '/fonts/LEDDot-Matrix.ttf'},
      {name: 'Seven Segment', src: '/fonts/SevenSegment.ttf'},
      {name: 'LCDDot TR', src: '/fonts/lcddot_tr.woff2'},
    ]
  },
})

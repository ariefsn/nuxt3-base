import { defineNuxtConfig } from 'nuxt3'

import de from 'dotenv'

de.config()

console.log('ts config', process.env.HOST, process.env.PORT)

export default defineNuxtConfig({
  head: {
    script: [
      { src: "https://requirejs.org/docs/release/2.3.5/minified/require.js", defer: true }
    ]
  },
  publicRuntimeConfig: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  modules: [
  ],
  buildModules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/dotenv'
  ],
  vue: {
    config: {
      silent: true,
      performance: true
    }
  },
  server: {
    host: process.env.HOST,
    port: process.env.PORT ? parseInt(process.env.PORT) : 7000
  }
})

import { defineNuxtConfig } from 'nuxt3'

console.log('ts config', process.env.HOST, process.env.PORT)

export default defineNuxtConfig({
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
    '@nuxtjs/dotenv'
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

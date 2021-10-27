import { defineNuxtPlugin } from '#app'
import Http from '@/helper/http'
import { IStore } from '@/models'
import { IMethods } from '@/helper/utils'

export default defineNuxtPlugin(nuxtApp => {
  const http = new Http()
  http.setBaseUrl('')

  nuxtApp.provide('http', http);
})

declare module '#app' {
  interface NuxtApp {
    $http: Http
    $store: IStore
    $utils: IMethods
  }
}

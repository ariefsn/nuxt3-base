import { defineNuxtPlugin } from '#app'
import store from '@/store'
import { IStore } from '@/models';

export default defineNuxtPlugin(nuxtApp => {
  const initStore = store()
  nuxtApp.provide('store', initStore);
})

// declare module '#app' {
//   interface NuxtApp {
//     $store: IStore
//   }
// }

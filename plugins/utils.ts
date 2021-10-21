import { defineNuxtPlugin } from '#app'
import { IMethods } from '~~/helper/utils';
import * as utils from '@/helper/utils'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('utils', utils as IMethods);
})

declare module '#app' {
  interface NuxtApp {
    $utils: IMethods
  }
}

import { defineNuxtPlugin } from '#app'
import store from '@/store'
import { IStore } from '~~/models';
// import { fetch, createFetch } from 'ohmyfetch'
import Ajax from '@/helper/ajax'
import { AjaxGet, IAjax } from '~~/models/ajax';

export default defineNuxtPlugin(nuxtApp => {
  const ajax = new Ajax()
  ajax.setBaseUrl('')

  nuxtApp.provide('ajax', ajax);
})

declare module '#app' {
  interface NuxtApp {
    $ajax: Ajax
  }
}

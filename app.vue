<template>
  <div>
    <!-- Remove this component to get started! -->
    <NuxtWelcome />
    <person />
    <counter />

    <input
      type="text"
      v-model="store.person.name"
    >
    <input
      type="number"
      v-model="store.counter.value"
    >
  </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from "#app";

const ajax = useNuxtApp().$ajax;
const store = useNuxtApp().$store;
const utils = useNuxtApp().$utils;

interface x {
  success: boolean;
  data: any;
  message: string;
}

const url = "https://resume-online-api.ariefsn.dev";

try {
  const res3 = await ajax.get<x>(url);
  console.log("$ajax-a", res3);
  const res4 = await ajax.$get<x>(url);
  console.log("$ajax-b", res4, res4.success, res4.message, res4.data);
} catch (error: any) {
  console.log("err", error?.message);
  console.log("err2", error?.response);
}

console.log(utils.capitalize("kwkwkwk"));
</script>
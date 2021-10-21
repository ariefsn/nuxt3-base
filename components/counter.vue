<template>
  <div>
    <div>Counter</div>
    {{ counterState.value }}
  </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from "#app";

const store = useNuxtApp().$store;

const counterState = store.counter;
</script>
<template>
  <div>
    <div>Person</div>
    {{ personState.name }}
  </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from "#app";

const personState = useNuxtApp().$store.person;
</script>
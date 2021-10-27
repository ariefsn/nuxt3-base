<template>
  <div>
    <div>Counter</div>
    {{ counterState.value }}
  </div>
</template>

<script lang="ts" setup>
const counterState = useNuxtApp().$store.counter;
</script>
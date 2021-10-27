<template>
  <div>
    <div>Person</div>
    <div>
      Name: {{ personState.name }}
    </div>
    <div>
      Age: {{ personState.age }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const personState = useNuxtApp().$store.person;
</script>
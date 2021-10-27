<template>
  <div>
    <!-- Remove this component to get started! -->
    <!-- <NuxtWelcome /> -->
    <person />
    <counter />

    <div>
      <label for="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        v-model="personState.name"
      >
    </div>

    <div>
      <label for="age">
        Age
      </label>
      <input
        id="age"
        type="number"
        v-model="personState.age"
      >
    </div>

    <div>
      <label for="counter">
        Counter
      </label>
      <input
        id="counter"
        type="number"
        v-model="counterState.value"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IStoreCounter } from "./models";

interface x {
  success: boolean;
  data: any;
  message: string;
}

onMounted(() => {
  // console.log(useNuxtApp().$utils.formatDate(new Date(), "DD MMMM YYYY", "id"));
});

const url = "https://resume-online-api.ariefsn.dev";

// const counterState = useState<IStoreCounter>("counter");

const store = useNuxtApp().$store;
const personState = store.person;
const counterState = store.counter;
</script>
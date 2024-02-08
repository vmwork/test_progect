<template>
  <v-container class="pt-0">
    <Appheader />
  </v-container>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import UseGetGifs from "../../composables/useGetGifs";
const { getGifs } = UseGetGifs();

onBeforeMount(async () => {
  await getGifs();
});
</script>

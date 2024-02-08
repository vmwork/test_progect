<template>
  <div class="app-header d-flex">
    <v-row
      class="mb-10 bg-grey-darken-4"
      no-gutters
      align="start"
      style="height: 60px"
    >
      <v-col cols="3">
        <router-link to="/">
          <v-sheet class="mt-4 bg-grey-darken-4">
            <v-responsive class="mx-auto">
              <v-img src="../../public/1.jpg" height="56" />
            </v-responsive>
          </v-sheet>
        </router-link>
      </v-col>
      <v-col>
        <v-sheet class="mt-4">
          <v-responsive class="mx-auto">
            <v-text-field
              v-model="querry"
              label="Search"
              hide-details="auto"
            ></v-text-field>
          </v-responsive>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import UseGetGifs from "..//../composables/useGetGifs";
const { getGifs, gifs } = UseGetGifs();

const querry = ref("");
const offset = ref(0);
watch(querry, () => {
  if (querry.value.length >= 2) {
    setTimeout(getGifs, 500, querry.value, offset);
  }
});
</script>

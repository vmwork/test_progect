<template>
  <div>
    <v-row v-if="gifs.length > 0">
      <v-col
        v-for="gif in gifs"
        :key="gif._slug"
        class="d-flex child-flex"
        cols="3"
      >
        <router-link class="link" :to="'/gif/' + gif.id">
          <v-img
            :src="gif.images.fixed_height.webp"
            :lazy-src="gif.images.fixed_height.webp"
            cover
            aspect-ratio="1"
            class="bg-grey-lighten-2"
          >
          </v-img>
        </router-link>
      </v-col>
    </v-row>
    <v-img
      v-else
      height="240"
      src="/public/404.gif"
      lazy-src=".././public/404.gif"
    >
    </v-img>
    <div class="d-flex justify-center">
      <v-pagination
        v-if="gifs.length > 0 && pagination.count !== pagination.total_count"
        v-model="page"
        :length="paginationLimit"
        @click="paginationEvent"
      ></v-pagination>
    </div>
    {{ paginationLimit }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import UseGetGifs from "../../composables/useGetGifs";
const { gifs, pagination, getGifs, actualQuerry } = UseGetGifs();
const page = ref(1);
const paginationLimit = computed(() => {
  return pagination;
});

const paginationEvent = () => {
  getGifs(actualQuerry, 0);
};
</script>

<style scoped>
.link {
  width: inherit;
}
</style>

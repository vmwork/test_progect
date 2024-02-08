<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="400"
      :src="gif.images.original.webp"
      cover
    >
      <v-card-title>{{ gif.title }}</v-card-title>
    </v-img>

    <v-card-text>
      <div>Author</div>
      <router-link class="link" :to="'/author/' + gif.id">
        <div>{{ gif.slug }}</div>
      </router-link>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import UseGetGif from "../../composables/useGetGif";
const { gif } = UseGetGif();
</script>

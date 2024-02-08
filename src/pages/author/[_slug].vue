<template>
  <v-container v-if="mounted" class="pt-0">
    <router-link class="link" :to="'/gif/' + gif.id">
      <div class="text-white">Back to GIf</div>
    </router-link>
    <v-card
      class="mx-auto"
      color="#26c6da"
      theme="dark"
      max-width="400"
      prepend-icon="mdi-twitter"
      title=""
    >
      <template v-slot:prepend>
        <v-avatar
          color="grey-darken-3 mr-4"
          :image="gif.images.original.webp"
        ></v-avatar>
        <a :href="gif.url">My page on Gifhy</a>
      </template>
      <v-card-actions>
        <v-list-item class="w-100">
          <v-list-item-title>{{ gif.username }}</v-list-item-title>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import UseGetGif from "../../../composables/useGetGif";
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
const router = useRoute();

const { gif, getGif } = UseGetGif();
const mounted = ref(false);
console.log(gif);
onBeforeMount(async () => {
  if (gif.value.length === 0) {
    await getGif(router.params._slug);
  }
  mounted.value = true;
});
</script>
<style scoped>
a {
  color: #000000;
}
</style>

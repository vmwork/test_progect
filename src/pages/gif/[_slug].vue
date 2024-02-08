<template>
  <div class="d">
    <UserCard v-if="mounted" />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

import UseGetGif from "../../../composables/useGetGif";
const router = useRoute();

const { getGif } = UseGetGif();
const mounted = ref(false);

onBeforeMount(async () => {
  await getGif(router.params._slug);
  mounted.value = true;
});
</script>

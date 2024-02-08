import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const gifs = ref([]);
const pagination = ref({});
const actualQuerry = ref(null);
export default () => {
  const errorSearch = ref("");
  const API = ref("");
  const route = useRoute();
  const router = useRouter();
  const getGifs = async (querry = actualQuerry.value, offset = 100) => {
    actualQuerry.value = querry;
    if (querry === null) {
      API.value = `${import.meta.env.VITE_API_BASE}gifs/categories?api_key=${
        import.meta.env.VITE_API_KEY
      }`;
    } else {
      API.value = `${import.meta.env.VITE_API_BASE}gifs/search?api_key=${
        import.meta.env.VITE_API_KEY
      }&q=${querry}&limit=25&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;
    }

    try {
      const response = await fetch(API.value);
      const results = await response.json();
      pagination.value = results.pagination;

      if (querry === null) {
        gifs.value = [];
        results.data.forEach((el) => {
          gifs.value.push(el.gif);
        });
      } else {
        gifs.value = results.data;
        setTimeout(() => {
          if (route.fullPath !== "/") {
            router.push({ path: "/" });
          }
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { gifs, errorSearch, getGifs, pagination, actualQuerry };
};

import { ref } from "vue";
import { useRoute } from "vue-router";

const user = ref([]);

export default () => {
  const router = useRoute();
  const userSlug = router.params._slug;

  const API = `${import.meta.env.VITE_API_BASE}gifs/${userSlug}?&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const getUser = async () => {
    try {
      const response = await fetch(API);
      const results = await response.json();
      console.log(results);
    } catch (error) {
      // console.log(error);
    }
  };

  return { getUser };
};

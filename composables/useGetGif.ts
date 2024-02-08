import { ref } from "vue";
import UseGetGifs from "../composables/useGetGifs";

export interface IUser {
  title: string;
  image_url: string;
  profile_url: string;
}

// const gif = ref<IUser>;
const gif = ref(<IUser>[]);

export default () => {
  const { gifs } = UseGetGifs();

  const getGif = async (gifID) => {
    // const gifID = "3o85xEMCOEHrHFSXdK";
    const API = `${import.meta.env.VITE_API_BASE}gifs/${gifID}?&api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(API);
      const results = await response.json();
      gif.value = [];
      gif.value = results?.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getGif, gif };
};

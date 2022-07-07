<template>
  <div>
    <body class="bg-gray-800 text-gray-100 px-8 py-12 min-h-screen">
      <form @submit.prevent="submitForm">
        <div
          class="max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg"
        >
          <div class="">
            <div>
              <span class="uppercase text-sm text-gray-600 font-bold"
                >Title</span
              >
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name=""
                id=""
                v-model="blog.title"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold"
                >Description</span
              >
              <textarea
                class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name=""
                id=""
                v-model="blog.description"
              ></textarea>
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-600 font-bold"
                >Image Url</span
              >
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name=""
                id=""
                v-model="blog.imageUrl"
              />
            </div>
            <div class="mt-8">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Blog
              </button>
            </div>
          </div>
        </div>
      </form>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {
        title: "",
        description: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    submitForm() {
      let apiURL = "blogs/create-blog";

      axios
        .post(apiURL, this.blog)
        .then(() => {
          this.$router.push("/");
          this.blog = {
            title: "",
            description: "",
            imageUrl: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
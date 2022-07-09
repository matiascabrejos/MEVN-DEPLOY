<template>
  <div>
    <body class="bg-gray-200 min-h-screen p-2">
      <div class="text-center p-6">
        <router-link
          to="/create-blog"
          class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
        >
          Create Blog
        </router-link>
      </div>
      <h1 class="font-bold text-2xl text-center mb-2">Blogs</h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 md:gap-5 lg:gap-5 gap-6 mb-4 text-center"
      >
        <div
          class="max-w-screen-xl mx-auto p-2"
          v-for="blog in Blogs"
          :key="blog._id"
        >
          <div
            class="hover:bg-gray-800 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div class="py-4 px-8">
              <a href="#">
                <h4 class="text-lg mb-1 font-semibold">
                  {{ blog.title }}
                </h4>
              </a>
              <p class="mb-3 text-sm">
                {{ blog.description }}
              </p>

              <img
                :src="blog.imageUrl"
                class="object-cover h-48 w-96 mx-auto rounded-sm"
              />

              <hr class="mt-4 border-gray-400" />
              <router-link :to="'/edit-blog/' + blog._id" class="text-xs"
                >EDIT</router-link
              >
              &nbsp;<button
                @click.prevent="deleteBlog(blog._id)"
                class="text-xs"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Blogs: [],
    };
  },
  created() {
    let apiURL = "blogs";

    axios
      .get(apiURL)
      .then((res) => {
        this.Blogs = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteBlog(id) {
      let apiURL = "blogs/delete/" + id;
      let indexOfArrayItem = this.Blogs.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Blogs.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

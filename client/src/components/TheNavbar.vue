<template>
  <div>
    <body class="bg-gray-800">
      <nav class="wrapper py-6 bg-gray-800">
        <div class="px-10 flex justify-between items-center">
          <div class="logo">
            <router-link to="/">
              <h1 class="navbar-text-logo">
                <span class="font-bold">mAt</span>deV.
              </h1>
            </router-link>
          </div>

          <div class="navbar hidden md:block">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/create-blog"
              >Create Blog</router-link
            >
          </div>

          <div class="ml-3 flex md:hidden">
            <!-- Mobile menu button -->
            <button @click="toggle" class="flex-center rounded-md">
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <router-link to="/" class="mobile-link focus:outline-none"
            >Home
          </router-link>
          <router-link to="/create-blog" class="mt-1 mobile-link focus:outline-none"
            >Create Blog
          </router-link>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.mobile-link {
  @apply block px-3 py-2 text-lg rounded-md font-medium text-center;
  color: white;
}
.nav-link {
  @apply ml-12 font-medium text-lg;
  color: white;
}
nav {
  border-bottom: 3px solid #ff41aa;
}
svg {
  color: white;
}
svg:hover {
  color: #ff41aa;
}
a.active {
  color: #ff41aa;
}
a:hover {
  color: #ff41aa;
}
.navbar-text-logo {
  @apply text-2xl font-semibold text-white;
}
</style>
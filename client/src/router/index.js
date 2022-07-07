import { createRouter, createWebHashHistory } from "vue-router";
import CreateBlog from "../components/CreateBlog.vue";
import ListBlog from "../components/ListBlog.vue";
import EditBlog from "../components/EditBlog.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/create-blog",
    name: "Create Blog",
    component: CreateBlog,
  },
  {
    path: "/",
    name: "Home",
    component: ListBlog,
  },
  {
    path: "/edit-blog/:id",
    name: "Edit",
    component: EditBlog,
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;

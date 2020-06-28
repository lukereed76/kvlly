import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: "/",
    name: "Home",
    metaInfo: {
      title: "Kelly Vaughn | I am the internet",
      meta: [
        {
          name: "description",
          content: "Take in the beauty of this really complex website.",
        },
        {
          property: "og:description",
          content: "Take in the beauty of this really complex website.",
        },
      ],
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

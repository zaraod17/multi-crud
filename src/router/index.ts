import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Auth/Login.vue";
import ProductsList from "../views/Products/ProductsList.vue";
import { getCookie } from "../utils/cookies";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "ProductsList",
    component: ProductsList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresUnauth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !getCookie("email") && !getCookie("password")) {
    next("/login");
  } else if (
    to.meta.requiresUnauth &&
    getCookie("email") &&
    getCookie("password")
  ) {
    next("/products");
  } else {
    next();
  }
});

export default router;

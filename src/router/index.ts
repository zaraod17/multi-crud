import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Auth/Login.vue";
import ProductsList from "../views/Products/ProductsList.vue";
import EditProduct from "../views/Products/EditProduct.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "ProductsList",
    component: ProductsList,
  },
  {
    path: "/products/edit/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, _, next) => {});

export default router;

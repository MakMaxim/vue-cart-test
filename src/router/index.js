import { createRouter, createWebHashHistory } from "vue-router";
import PageMain from "@/views/PageMain";
import PageCart from "@/views/PageCart";

const routes = [
   {
      path: "/",
      name: "main",
      component: PageMain,
   },
   {
      path: "/cart",
      name: "cart",
      component: PageCart,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;

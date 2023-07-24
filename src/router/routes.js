import { createWebHashHistory } from "vue-router";
const routes = [
  {
    history: createWebHashHistory(),
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "PromotionApp",
        component: () => import("components/PromotionApp"),
      },
      { path: "MoreApp", component: () => import("components/MoreApp") },
      { path: "LoginApp", component: () => import("components/LoginApp") },
      {
        path: "RegistrApp",
        component: () => import("components/RegistrApp"),
      },
      { path: "CardApp", component: () => import("components/CardApp") },
      { path: "OrderApp", component: () => import("components/OrderApp") },
      { path: "AdminPanel", component: () => import("components/AdminPanel") },
      /*







      { path: "OrderList", component: () => import("components/OrderList") },
      */
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

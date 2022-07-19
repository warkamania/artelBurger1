const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "OrderApp", component: () => import("components/OrderApp") },
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
      { path: "AdminPanel", component: () => import("components/AdminPanel") },
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

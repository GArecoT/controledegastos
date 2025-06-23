const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("pages/categoriesPage.vue"),
      },
    ],
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("layouts/settingsLayout.vue"),
    children: [
      {
        path: "",
        name: "settingsHome",
        component: () => import("pages/IndexPage.vue"),
      },
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

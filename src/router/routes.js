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
{
        path: "payment",
        name: "payment",
        component: () => import("pages/paymentPage.vue"),
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
        component: () => import("components/configComponent.vue"),
      },
      {
        path: "geral",
        name: "settingsGeral",
        component: () => import("pages/settings/geralPage.vue"),
      },
      {
        path: "servidor",
        name: "settingsServidor",
        component: () => import("pages/settings/servidorPage.vue"),
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

export const menus = [
  {
    path: "/",
    name: "home",
    icon: "material-symbols:travel",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/user",
    name: "user",
    icon: "material-symbols:person",
    component: () => import("@/pages/user/index.vue"),
  },
];

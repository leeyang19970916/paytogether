export const routes = [
  {
    path: "/trip",
    name: "Trip",
    icon: "material-symbols:travel",
    component: () => import("@/pages/trip/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    icon: "material-symbols:person",
    component: () => import("@/pages/user/index.vue"),
  },
];

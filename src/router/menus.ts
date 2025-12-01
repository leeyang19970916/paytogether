export const menus = [
  {
    path: "/",
    name: "home",
    title: "專案列表",
    icon: "material-symbols:travel",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/home/project/:id",
    name: "projectDetail",
    title: "專案詳細資料",
    icon: "material-symbols:travel",
    component: () => import("@/pages/home/project/index.vue"),
  },

  {
    path: "/user",
    name: "user",
    title: "成員列表",
    icon: "material-symbols:person",
    component: () => import("@/pages/user/index.vue"),
  },
];

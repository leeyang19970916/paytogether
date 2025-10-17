const pageTitleMapping = {
  user: "成員",
  trip: "旅行",
};
type PageName = "user" | "trip";

export const getTitle = (pageName: PageName) => {
  return pageTitleMapping[pageName];
};

// 白痴做法 再看看
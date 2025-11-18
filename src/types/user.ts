export type User = {
  id: string;
  isPin: boolean;
  name: string;
  updateTime: string;
  note?: string;
  //   avatar_url: string; //頭像，直接路徑就可以了
  nickName?: string; //綽號
  color: string;
};

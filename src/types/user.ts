import type { updatedTime } from ".";
export type User = {
  id: string;
  isPin: boolean;
  name: string;
  updatedTime: updatedTime;
  note?: string;
  nickName?: string; //綽號
  color: string;
};

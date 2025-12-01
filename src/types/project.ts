import type { User } from "./user";
import type { updatedTime } from ".";
export type UserOption = {
  label: User["name"];
  value: User["id"];
};
export type Project = {
  id: string;
  title: string;
  users: UserOption[];
  isPin: boolean;
  updatedTime: updatedTime;
  notes: string;
};

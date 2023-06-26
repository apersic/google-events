import { format } from "date-fns";

export const getFormattedDate = (datetime: string) => {
  return format(new Date(datetime), "yyyy-MM-dd");
};

export const getFormattedTime = (datetime: string) => {
  return format(new Date(datetime), "hh:mm:ss");
};

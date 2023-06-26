import { format } from "date-fns";

export const getFormattedDate = (datetime: string) => {
  return format(new Date(datetime), "yyyy-MM-dd hh:mm:ss");
};

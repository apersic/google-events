import { format } from "date-fns";

export const getFormattedDate = (datetime: string) => {
  return format(new Date(datetime), "dd-LL-yyyy");
};

export const getFormattedTime = (datetime: string) => {
  return format(new Date(datetime), "hh:mm:ss");
};

export const getWeekNumberSufix = (number: number) => {
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

import { format } from "date-fns";
import { AvailableLanguages } from "../../store/types";

export const getFormattedDate = (datetime: string) => {
  return format(new Date(datetime), "dd-LL-yyyy");
};

export const getFormattedTime = (datetime: string) => {
  return format(new Date(datetime), "hh:mm:ss");
};

const getDefaultSufix = (number: number) => {
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

export const getWeekNumberSufix = (number: number, language: string) => {
  switch (language) {
    case AvailableLanguages.HR:
      return ".";
    case AvailableLanguages.EN:
    default:
      return getDefaultSufix(number);
  }
};

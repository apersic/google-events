/* eslint-disable @typescript-eslint/indent */
import {
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  format,
  getISOWeek,
  getYear,
  startOfDay,
  startOfToday,
} from "date-fns";
import { GroupByTypes } from "../../store/types";
import { Event } from "../types";
import { getWeekNumberSufix } from "./DateFormatter";

const getWeekLabel = (week: number, year: number) => {
  return `${week}${getWeekNumberSufix(week)} week of ${year}`;
};

const getGroupsByWeek = (events: Event[]) => {
  const groups: string[] = [];

  events.forEach((event) => {
    const week = getISOWeek(new Date(event.start.dateTime));

    const weekLabel = getWeekLabel(week, getYear(new Date(event.start.dateTime)));
    if (!groups.includes(weekLabel)) {
      groups.push(weekLabel);
    }
  });

  return groups;
};

const getGroupsByDay = (events: Event[]) => {
  const groups: string[] = [];

  events.forEach((event) => {
    const day = format(new Date(event.start.dateTime), "yyyy-MM-dd");
    if (!groups.includes(day)) {
      groups.push(day);
    }
  });

  return groups;
};

const groupEventsByWeek = (events: Event[]) => {
  const groupedList: { group: string; events: Event[] }[] = [];
  const groups = getGroupsByWeek(events);

  groups.forEach((group) => {
    const groupEvents = events.filter(
      (event: Event) =>
        getWeekLabel(
          getISOWeek(new Date(event.start.dateTime)),
          getYear(new Date(event.start.dateTime))
        ) === group
    );

    const newObject = {
      group,
      events: groupEvents,
    };

    groupedList.push(newObject);
  });

  return groupedList;
};

const groupEventsByDay = (events: Event[]) => {
  const groupedList: { group: string; events: Event[] }[] = [];
  const groups = getGroupsByDay(events);

  groups.forEach((group) => {
    const groupEvents = events.filter(
      (event: Event) => format(new Date(event.start.dateTime), "yyyy-MM-dd") === group
    );

    const newObject = {
      group,
      events: groupEvents,
    };

    groupedList.push(newObject);
  });

  return groupedList;
};

const sortByStartDate = (a: Event, b: Event) => {
  if (startOfDay(new Date(a.start.dateTime)) < startOfDay(new Date(b.start.dateTime))) return -1;
  if (startOfDay(new Date(a.start.dateTime)) > startOfDay(new Date(b.start.dateTime))) return 1;
  return 0;
};

const getEventsUpToLimit = (events: Event[], daysLimit: number) => {
  const newList: Event[] = [];
  const today = startOfToday();
  let endDay = addDays(today, daysLimit);
  endDay = addHours(endDay, 23);
  endDay = addMinutes(endDay, 59);
  endDay = addSeconds(endDay, 59);

  events.forEach((event) => {
    const date = new Date(event.start.dateTime);
    if (today.getTime() <= date.getTime() && endDay.getTime() >= date.getTime()) {
      newList.push(event);
    }
  });

  return newList;
};

export const sortEvents = (events: Event[], groupBy: GroupByTypes, daysLimit: number) => {
  const filteredList: Event[] = getEventsUpToLimit(events, daysLimit);
  let groupedList;

  switch (groupBy) {
    case GroupByTypes.WEEK:
      groupedList = groupEventsByWeek(filteredList.sort(sortByStartDate));
      break;
    case GroupByTypes.DAY:
    default:
      groupedList = groupEventsByDay(filteredList.sort(sortByStartDate));
  }

  return groupedList;
};

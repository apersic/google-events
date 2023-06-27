import { Event, User } from "../shared/types";

export enum GroupByTypes {
  DAY = "day",
  WEEK = "week",
}

export enum AvailableLanguages {
  EN = "en",
  HR = "hr",
}

export interface UserReducerState {
  accessToken: string | null;
  user: User | null;
}

export interface CoreReducerState {
  isSubmenuOpened: boolean;
}

export interface EventReducerState {
  events: Event[] | null;
  groupBy: GroupByTypes;
  daysLimit: number;
}

export interface StoreState {
  coreReducer: CoreReducerState;
  userReducer: UserReducerState;
  eventReducer: EventReducerState;
}

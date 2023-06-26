import { Event, User } from "../shared/types";

export interface UserReducerState {
  accessToken: string | null;
  user: User | null;
}

export interface CoreReducerState {
  isSubmenuOpened: boolean;
}

export interface EventReducerState {
  events: Event[] | null;
}

export interface StoreState {
  coreReducer: CoreReducerState;
  userReducer: UserReducerState;
  eventReducer: EventReducerState;
}

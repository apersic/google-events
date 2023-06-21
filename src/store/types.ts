import { User } from "../shared/types";

export interface UserReducerState {
  accessToken: string | null;
  user: User | null;
}

export interface CoreReducerState {
  isSubmenuOpened: boolean;
}

export interface StoreState {
  coreReducer: CoreReducerState;
  userReducer: UserReducerState;
}

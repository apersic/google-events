import { User } from "../shared/types";

export interface userReducerState {
  accessToken: string | null;
  user: User | null;
}

export interface StoreState {
  userReducer: userReducerState;
}

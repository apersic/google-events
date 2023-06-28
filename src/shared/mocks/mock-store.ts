import { GroupByTypes, StoreState } from "../../store/types";

export const mockStoreState: StoreState = {
  coreReducer: {
    isSubmenuOpened: false,
  },
  userReducer: {
    user: null,
    accessToken: null,
  },
  eventReducer: {
    events: null,
    groupBy: GroupByTypes.DAY,
    daysLimit: 7,
  },
};

import { AnyAction, Store, configureStore } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import { mockStoreState } from "../shared/mocks/mock-store";
import { StoreState } from "./types";

const initialState = mockStoreState;

const SETUP_STORYBOOK_ACTION = "SETUP_STORYBOOK_ACTION";

const reducer = (state: StoreState = initialState, reduxAction: AnyAction): StoreState => {
  const { type, ...extraProps } = reduxAction;

  if (type === SETUP_STORYBOOK_ACTION) {
    return extraProps as StoreState;
  }

  return state;
};

const storybookStore: Store = configureStore({
  reducer: reducer,
});

type StoryBookDecorator = (StoryComponent: StoryFn) => React.ReactElement<unknown>;

export const emptyReduxStoreDecorator: StoryBookDecorator = (
  StoryComponent: StoryFn
): React.ReactElement<unknown> => (
  <Provider store={storybookStore}>
    <StoryComponent />
  </Provider>
);

export const reduxStoreDecorator = (state: StoreState): StoryBookDecorator => {
  const store = storybookStore;
  store.dispatch({
    type: SETUP_STORYBOOK_ACTION,
    ...state,
  });

  return (StoryComponent: StoryFn): React.ReactElement<unknown> => (
    <Provider store={store}>
      <StoryComponent />
    </Provider>
  );
};

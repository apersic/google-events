/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CLIENT_ID: string;
    REACT_APP_SCOPES: string;
    REACT_APP_BASE_URL: string;
  }
}

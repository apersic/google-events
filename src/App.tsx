import Router from "./routers/Router";
import { initI18n } from "./shared/localisation/i18n-init";

initI18n();

const App = () => {
  return <Router />;
};

export default App;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import reduxConfig from "./redux.jsx";
const store = reduxConfig();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

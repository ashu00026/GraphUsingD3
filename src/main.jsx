import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Store from "./Store";
import Store from "./Store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// import { Provider } from "react-redux";
import { Provider } from "react-redux";

if (process.env.NODE_ENV === "production") disableReactDevTools();

export let persistor = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

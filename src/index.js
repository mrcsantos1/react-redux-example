import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { persistedStore, store } from "./store/store";
import HomeView from "./views/Home.view";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <HomeView />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

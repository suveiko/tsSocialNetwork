import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {store, StoreType} from "./redux/redux-store";
import App from "./App";

import './index.css';
import {Provider} from "react-redux";

const renderTree = (state: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(store.getState())
store.subscribe(() => {
    renderTree(store.getState())
})
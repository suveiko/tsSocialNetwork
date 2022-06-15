import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {store, StoreType} from "./redux/redux-store";
import App from "./App";

import './index.css';


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
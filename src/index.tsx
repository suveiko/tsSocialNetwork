import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {store, StoreType} from "./redux/redux-store";
import App from "./App";

import './index.css';



const renderTree = (state: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
// renderTree()
// store.subscriber(renderTree)
renderTree(store.getState())
store.subscribe(() => {
    renderTree(store.getState())
})
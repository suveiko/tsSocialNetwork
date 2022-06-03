import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {store} from "./redux/state";
import App from "./App";

import './index.css';


const renderTree = () => {
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
renderTree()
store.subscriber(renderTree)

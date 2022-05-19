import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StateType} from "./redux/state";
import ReactDOM from "react-dom";


export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,

        document.getElementById('root')
    );
}
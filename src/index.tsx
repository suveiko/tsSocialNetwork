import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {store} from "./redux/state";
import App from "./App";

import './index.css';


const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store._state}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addPost={store.addPost.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree()
store.subscriber(renderTree)

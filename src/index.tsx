import React from 'react';
import './index.css';
import {
    addMessage,
    addPost,
    state,
    StateType,
    subscriber,
    updateNewMessageText,
    updateNewPostText
} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";


const renderTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                updateNewMessageText={updateNewMessageText}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                addPost={addPost}
            />
        </BrowserRouter>,

        document.getElementById('root')
    );
}
renderTree(state)
subscriber(() => renderTree(state))

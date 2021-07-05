import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)




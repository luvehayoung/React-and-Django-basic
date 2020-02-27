import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import { Provider } from 'react-redux';

const store = createStore(reducers);

//state가 변할때 실행되야하는것
// const unsubscribe = store.subscribe(()=>console.log(store.getState()));

// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.decrement());
// store.dispatch(actions.decrement());
// store.dispatch(actions.decrement());
// store.dispatch(actions.set_color([200,200,200]));

// unsubscribe();
// store.dispatch(actions.set_color([210,200,200]));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

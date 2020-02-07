import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './Store/Reducer/Reducer';
import NewApp from './NewApp';
import NewReducer from './Store/Reducer/NewReducer';
import Parent from './Parent';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchAgeUp} from  './Sagas/saga'
import App1 from './App1'


const sagaMiddleware =createSagaMiddleware();




// Normal middleware
// const logAction = store => {
//     return next => {
//         return action =>{
//             const result = next(action);
//             console.log('middleware' ,result)
//             return result;
//         }
//     }
// }

const rootReducer = combineReducers({
    reducer:reducer,
    NewReducer:NewReducer
})

const store= createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchAgeUp)
// ReactDOM.render(<Provider store={store}>
//     <Parent />
//     </Provider>, document.getElementById('root'));
ReactDOM.render(<App1/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

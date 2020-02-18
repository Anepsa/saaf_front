import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/bootstrap.css"

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; 
import axios from "axios"

axios.interceptors.request.use(request => {
  console.log("Request is:" + request.method.toUpperCase(), request);
  return request;
});
axios.interceptors.response.use(response => {
  console.log("Response is:", response);
  return response;
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



serviceWorker.unregister();

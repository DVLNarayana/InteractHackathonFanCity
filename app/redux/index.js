/* @flow */

"use strict";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import promise from "./promise";

import app from "./app/reducer";
import network from "./network/reducer";
import events from "./events/reducer";

const RootReducer = combineReducers({ app, network, events });

const enhancer = compose(applyMiddleware(thunk, promise));

export default (data) => {
  const store = createStore(RootReducer, enhancer);
  return { store };
};

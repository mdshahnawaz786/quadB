import { legacy_createStore } from "redux";
import { basicReducer } from "./reducer";

export const myStore = legacy_createStore(basicReducer)
import {applyMiddleware, combineReducers, createStore} from "redux";
import {movies} from "./reducers/movies";
import {todos} from "./reducers/todos";
import {shop} from "./reducers/shop";
import {rickAndMorty} from './reducers/rickAndMorty'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    movies,
    todos,
    shop,
    rickAndMorty,
}), composeWithDevTools(applyMiddleware(thunk)))

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {mainReducer} from "./reducers";

/**
 * Компонент, необходимый для обновления состояния
 * @type {Store<EmptyObject & S, AnyAction> & Store<S, A> & {dispatch: ThunkDispatch<{}, undefined, AnyAction>}}
 */
const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
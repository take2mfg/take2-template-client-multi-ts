import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState = {}) => {
  // Create our store
  const store = createStore(
    combineReducers({
      form: enableBatching(formReducer),
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
      )
    ),
  );

  return { store };
};

import myreducer from 'src/reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/sagas';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose;
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
	const middlewares = [sagaMiddleware];
	const enhancers = [applyMiddleware(...middlewares)];
	const store = createStore(myreducer, composeEnhancers(...enhancers));
	sagaMiddleware.run(rootSaga);
	return store;
};

const store = configureStore();
export default store;

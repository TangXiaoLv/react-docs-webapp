import { applyMiddleware, createStore ,compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducers from '../reducers/index'

const middlewares = [];

middlewares.push(thunk);
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    // middlewares.push(logger);
}

export default function configureStore() {
    const store = compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(reducers);
    return store;
};

import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './redux/reducers';
import { createLogger } from "redux-logger";

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// REDUX
const logger = createLogger(createLogger);

const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();


// dai de la video 28
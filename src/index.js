import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './redux/reducers';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// REDUX
const store = createStore(searchRobots);

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();


// dai de la video 28
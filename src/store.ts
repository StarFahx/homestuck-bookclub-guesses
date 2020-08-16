import { createStore } from 'redux';
import root from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(root, composeWithDevTools());

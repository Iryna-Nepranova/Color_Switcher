import { createStore } from 'redux';
import { switcherReducer } from './reducers/switcher';

export const store = createStore(switcherReducer);

import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';
import status from './status';

const reducers = combineReducers({
    counter, ui, status
});

export default reducers;
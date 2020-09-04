import {createStore} from 'redux';
import imagesReduces from './reducer';

const store = createStore(imagesReduces);
export default store;

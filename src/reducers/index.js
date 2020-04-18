import { combineReducers } from 'redux';
import { categories } from './categories';
import { products } from './products';
import { notifications } from './notifications';

export default combineReducers({
  categories,
  products,
  notifications
});

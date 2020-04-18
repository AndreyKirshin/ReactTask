import { productApi } from '../gateways/ProductApi';
import { showNotification, hideNotification } from './notifications'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

const receiveProducts = (json) => ({
  type: RECEIVE_PRODUCTS,
  products: json.map(product => product),
});

export const fetchProducts = () => dispatch => {
  dispatch(requestProducts());
  const json = productApi.getProducts();
  dispatch(receiveProducts(json));
};

const createProductRequest = product => ({
  type: CREATE_PRODUCT_REQUEST,
  product
});

const createProductSuccess = product => ({
  type: CREATE_PRODUCT_SUCCESS,
  product
});

export const createProduct = product => dispatch => {
  dispatch(createProductRequest(product));
  // server request simulation
  setTimeout(() => {
    dispatch(createProductSuccess(product));
    dispatch(showNotification());
    setTimeout(dispatch(hideNotification()), 4000)
  }, 2000);
};

const editProductRequest = product => ({
  type: EDIT_PRODUCT_REQUEST,
  product
});

const editProductSuccess = product => ({
  type: EDIT_PRODUCT_SUCCESS,
  product
});

export const editProduct = product => dispatch => {
  dispatch(editProductRequest(product));
  // server request simulation
  setTimeout(() => {
    dispatch(editProductSuccess(product));
    dispatch(showNotification());
    setTimeout(dispatch(hideNotification()), 4000)
  }, 2000);
}



import * as productsActions from '../actions/products';

export function products(state = [], action) {
  switch (action.type) {
    case productsActions.RECEIVE_PRODUCTS:
      return [
        ...action.products,
      ];
    case productsActions.CREATE_PRODUCT_SUCCESS: 
      return [
        ...state,
        action.product
      ];
    case productsActions.EDIT_PRODUCT_SUCCESS:
      const products = [...state].filter( item => +item.id !== +action.product.id);
      products.push(action.product)
      return [
        ...products
      ]
    default:
      return state;
  }
}

export function getProductById(state) {

  return id => state.products.find(item => {
    return +item.id === +id });
};

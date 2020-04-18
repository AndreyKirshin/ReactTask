import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { fetchCategories } from '../../actions/categories';
import { fetchProducts, editProduct } from '../../actions/products';
import { getProductById } from '../../reducers/products';
import ProductForm from '../ProductForm/ProductForm';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export const ProductEditContainer = ({
  categories,
  getCaregories,
  getProducts,
  editProduct,
  notifications,
  product
}) => {

  useEffect(() => {
    getCaregories();
    getProducts();
  }, [getCaregories, getProducts]);

  
  useEffect(() => {
    if (notifications) {
      NotificationManager.success('Product has been updated', 'Success!');
    }
  }, [notifications]);
  
  
  return (
    <Fragment>
      <Header name="Edit Product"/>
      <div>we will edit here</div>
      <ProductForm categories={categories} sendProduct={editProduct} product={product}/>
      <NotificationContainer/>
    </Fragment>
  )
}

ProductEditContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  getCaregories: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  notifications: PropTypes.bool.isRequired,
  product: PropTypes.object
};

ProductEditContainer.defaultProps = {
  product: null
};

const mapStateToProps = state => {
  const { categories, notifications } = state;
  const product = getProductById(state)(window.location.pathname.split('/').pop());

  return {
    categories,
    notifications,
    product
  }
};

const mapDispatchToProps = dispatch => ({
  getCaregories: () => dispatch(fetchCategories()),
  getProducts: () => dispatch(fetchProducts()),
  editProduct: product => dispatch(editProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditContainer);
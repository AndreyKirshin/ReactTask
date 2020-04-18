import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { fetchCategories } from '../../actions/categories';
import { fetchProducts, createProduct } from '../../actions/products';
import ProductForm from '../ProductForm/ProductForm';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export const ProductCreateContainer = ({ categories, getCaregories, getProducts, createProduct, notifications }) => {
  useEffect(() => {
    getCaregories();
    getProducts();
  }, [getCaregories, getProducts]);

  useEffect(() => {
    if (notifications) {
      NotificationManager.success('Product has been added', 'Success!');
    }
  }, [notifications]);
  
  return (
    <Fragment>
      <Header name="Create Product"/>
      <div>we will create here</div>
      <ProductForm categories={categories} sendProduct={createProduct}/>
      <NotificationContainer/>
    </Fragment>
  )
}

ProductCreateContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  getCaregories: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  notifications: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { categories, notifications } = state;
  return {
    categories,
    notifications
  }
};

const mapDispatchToProps = dispatch => ({
  getCaregories: () => dispatch(fetchCategories()),
  getProducts: () => dispatch(fetchProducts()),
  createProduct: product => dispatch(createProduct(product))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreateContainer);
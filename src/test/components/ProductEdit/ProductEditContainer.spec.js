import React from 'react';
import { ProductEditContainer } from '../../../components/ProductEdit/ProductEditContainer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('<ProductEditContainer/>', () => {
  const props = {
    categories: [],
    getCaregories: jest.fn(),
    getProducts: jest.fn(),
    editProduct: jest.fn(),
    notifications: false,
    product: {
      name: '111',
      id: 1,
      categories: [1, 2, 3],
      rating: 3
    }
  }
  it('should match snapchot', () => {
    const wrapper = shallow(<ProductEditContainer {...props}/>);

    expect(wrapper).toMatchSnapshot()
  })
})
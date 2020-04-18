import React from 'react';
import { ProductCreateContainer } from '../../../components/ProductCreate/ProductCreateContainer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('<ProductCreateContainer/>', () => {
  const props = {
    categories: [],
    getCaregories: jest.fn(),
    getProducts: jest.fn(),
    createProduct: jest.fn(),
    notifications: false
  }
  it('should match snapchot', () => {
    const wrapper = shallow(<ProductCreateContainer {...props}/>);

    expect(wrapper).toMatchSnapshot()
  })
})
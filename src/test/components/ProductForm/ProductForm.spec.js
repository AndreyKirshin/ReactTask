import React from 'react';
import ProductForm from '../../../components/ProductForm/ProductForm';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('<ProductForm/>', () => {
  const props = {
    categories: [],
    sendProduct: jest.fn(),
    product: {
      name: '111',
      id: 1,
      categories: [1, 2, 3],
      rating: 3
    }
  }
  it('should match snapchot', () => {
    const wrapper = shallow(<ProductForm {...props}/>);

    expect(wrapper).toMatchSnapshot()
  })
})
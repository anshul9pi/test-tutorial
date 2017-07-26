import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './categories';

import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import mockCategories from '../../mock/categories';

it('renders empty state when categories prop not set', () => {
  const wrapper = shallow(<Categories />);
  expect(wrapper.find('.Categories-empty').exists()).to.eq(true);
});

it('renders empty state when categories prop is an empty array', () => {
  const wrapper = shallow(<Categories categories={[]} />);
  expect(wrapper.find('.Categories-empty').exists()).to.eq(true);
});

it('renders categories based on category props', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Categories categories={mockCategories} />
    </MemoryRouter>
  );
  expect(wrapper.find('div.Categories-item')).to.have.length(
    mockCategories.length
  );

  wrapper.find('div.Categories-item').forEach((node, index) => {
    const category = mockCategories[index];
    expect(node.hasClass('Categories-item')).to.equal(true);
    expect(node.text()).to.equal(category.name);
    expect(node.type()).to.equal('div');
  });

});

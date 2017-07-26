import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders with default header class if no class props specified', () => {
  const wrapper = shallow(<Header>This is a header</Header>);
  expect (wrapper.find('h1.header')).to.have.length(1);
});

it('renders with className if provided in props', () => {
  const wrapper = shallow(<Header className="white">This is a header</Header>);
  expect(wrapper.is('.white')).to.equal(true);
});

it('renders text', () => {
  const wrapper = shallow(<Header className="white">This is a header</Header>);
  expect (wrapper.find('h1.white').children().text()).equal("This is a header");
});

it('renders children', () => {
  const wrapper = shallow(<Header className="white">This is a <a href="/">header</a></Header>);
  expect (wrapper.find('h1').html()).equal('<h1 class="header white">This is a <a href="/">header</a></h1>');
});

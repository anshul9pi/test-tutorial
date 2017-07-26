import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import mockCategories from '../../mock/categories';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Home />, div);
// });

const categoryPromise = Promise.resolve({
  json: () => { return mockCategories }
});
sinon.stub(global, 'fetch').callsFake(() => categoryPromise);

// it('is wrapped in a Home class', () => {
//   const wrapper = shallow(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   );
//   expect(wrapper.hasClass('Home')).to.eq(true);
// });

// it('initially renders with empty array for categories state', () => {
//   const wrapper = shallow(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   );
//   expect(wrapper.state('categories')).to.deep.equal([]);
// });

// it('renders with initial state as isLoading', () => {
//   const wrapper = shallow(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   );
//   expect(wrapper.state('isLoading')).to.equal(true);
// });

// it('renders with a Loader when loading', () => {
//   const wrapper = shallow(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   );
//   expect(wrapper.find('.loader').exists()).to.eq(true);
// });

it('renders content when data is loaded', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Home match={{url: '/'}} />
    </MemoryRouter>
  );
  return categoryPromise.then(() => {
    wrapper.update();
  }).then(() => {
    expect(wrapper.find('.loader').exists()).to.eq(false);
    expect(wrapper.find('.Categories').exists()).to.eq(true);
  });
});

// it('sets states appropriately after receiving response from API', () => {
//   const wrapper = mount(
//     <MemoryRouter>
//       <Home match={{url: '/'}} />
//     </MemoryRouter>
//   );
//   return categoryPromise.then(() => {
//     wrapper.update();
//   }).then(() => {
//     expect(wrapper.state('isLoading')).to.eq(false);
//     expect(wrapper.state('categories')).to.deep.equal(mockCategories);
//   });
// });

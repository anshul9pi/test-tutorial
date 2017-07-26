import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

it('renders without crashing', () => {
  shallow(<App />);
});

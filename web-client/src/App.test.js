import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import routes from './Configs/routes'

describe('App', () => {

  const wrapper = shallow(<App />);


  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshoot();
  })

  it('should have N route(s)', () => {
    expect(wrapper.find('Route')).toHaveLength(routes.length);
  });
})



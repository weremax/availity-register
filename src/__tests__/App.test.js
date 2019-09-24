import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root';
import App from '../App';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<Root><App /></Root>);
});

it('Loads App', () => {
    expect(wrapped.find(App).length).toEqual(1);
});
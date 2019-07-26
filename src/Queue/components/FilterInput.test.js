import React from 'react';
import FilterInput from './FilterInput';
import renderer from 'react-test-renderer';

describe('filter input component testing', () => {
  it('renders filter input styled-component', () => {
    const tree = renderer
    .create(<FilterInput></FilterInput>)
    .toJSON();
    expect(tree).toMatchSnapshot()
  });
})


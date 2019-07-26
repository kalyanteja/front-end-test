import React from 'react';
import ProfilePicture from './ProfilePicture';
import renderer from 'react-test-renderer';

describe('picture component testing', () => {
  it('renders picture styled-component', () => {
    const tree = renderer
    .create(<ProfilePicture></ProfilePicture>)
    .toJSON();
    expect(tree).toMatchSnapshot()
  });
})


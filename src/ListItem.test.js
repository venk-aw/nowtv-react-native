import React from 'react';
import ListItem from './ListItem';
import renderer from 'react-test-renderer';

describe('ListItem', () => {
  it ('should render without exploding', () => {
    const tree = renderer.create(<ListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('should render without failure even if no user is passed', () => {
    const minProps = {
      id: 'cd445e6d-e514-424f-ba8f-16ec842004da',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Lorem ipsum',
      timestamp: '2017-01-11T01:07:00Z'
    };
    const tree = renderer.create(<ListItem {...minProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('should render the image', () => {
    const minProps = {
      id: 'cd445e6d-e514-424f-ba8f-16ec842004da',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Lorem ipsum',
      timestamp: '2017-01-11T01:07:00Z',
      user: {
        "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "firstName": "Martin",
        "lastName": "Bradley",
        "email": "mbradley0@google.it",
        "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        "ip": "166.124.172.160"
      }
    };
    const tree = renderer.create(<ListItem {...minProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('should not render the image if no URL provided', () => {
    const minProps = {
      id: 'cd445e6d-e514-424f-ba8f-16ec842004da',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Lorem ipsum',
      timestamp: '2017-01-11T01:07:00Z',
      user: {
        "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "firstName": "Martin",
        "lastName": "Bradley",
        "email": "mbradley0@google.it",
        "avatar": null,
        "ip": "166.124.172.160"
      }
    };
    const tree = renderer.create(<ListItem {...minProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { reducer } from './store';
import { MESSAGES_LOADING, USERS_LOADING } from './actions';

const messages = [{
  id: 'cd445e6d-e514-424f-ba8f-16ec842004da',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
  message: 'Lorem ipsum',
  timestamp: '2017-01-11T01:07:00Z'
}, {
  id: 'cd445e6d-e514-424f-ba8f-16ec8420324a',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cdfef3',
  message: 'Lorem ipsum, nulla.',
  timestamp: '2018-02-09T04:27:38Z'
}, {
  id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
  message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
  timestamp: '2017-02-09T04:27:38Z'
}];

const users = [
  {
    "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  },
  {
    "id": "fe27b760-a915-475c-80bb-7cdf14cdfef3",
    "firstName": "Helen",
    "lastName": "Hawkins",
    "email": "hhawkins1@posterous.com",
    "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
    "ip": "179.239.189.173"
  }
]

it('should set messages in the store', () => {
  const updatedStore = reducer({}, { type: `${MESSAGES_LOADING}_FULFILLED`, payload: messages });
  expect(updatedStore.messages.length).toEqual(messages.length);
});

it ('should sort the messages by timestamp', () => {
  const sortedMessages = [{
    id: 'cd445e6d-e514-424f-ba8f-16ec8420324a',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cdfef3',
    message: 'Lorem ipsum, nulla.',
    timestamp: '2018-02-09T04:27:38Z'
  }, {
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z'
  }, {
    id: 'cd445e6d-e514-424f-ba8f-16ec842004da',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Lorem ipsum',
    timestamp: '2017-01-11T01:07:00Z'
  }]
  const updatedStore = reducer({}, { type: `${MESSAGES_LOADING}_FULFILLED`, payload: messages });
  expect(updatedStore.messages).toEqual(sortedMessages);
});

it ('should load users into store', () => {
  const updatedStore = reducer({}, { type: `${USERS_LOADING}_FULFILLED`, payload: users });
  expect(Object.keys(updatedStore.users).length).toEqual(users.length);
});

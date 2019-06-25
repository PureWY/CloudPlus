import React, {Component} from 'react';
import { Provider } from 'react-redux'
import createStore from './App/Redux'
import RootContainer from './App/Views/RootContainer'

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer/>
      </Provider>
    );
  }
}

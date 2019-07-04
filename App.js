import React, {Component} from 'react';
import { Provider } from '@ant-design/react-native';
import * as ReactRedux from 'react-redux'
import createStore from './App/Redux'
import RootContainer from './App/Views/RootContainer'
import './App/Utils/Storage'

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <Provider>
          <RootContainer/>
        </Provider>
      </ReactRedux.Provider>
    );
  }
}

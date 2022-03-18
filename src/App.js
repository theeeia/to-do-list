import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import  Main from './containers/Main'
import {store, persistor}  from "./redux/store"

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main>

          </Main>
        </PersistGate>
      </Provider>
    )
  }
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';

import combinacaoReducers from '../reducers';
import Form from '../componentes/Form';
import List from '../componentes/List';

const store = createStore(combinacaoReducers , devToolsEnhancer());

export default class TelaPrincipal extends React.Component {
  render() {
    return (
     <Provider store = {store}>
        <View style={styles.container}>
          <Form />
          <List />
        </View> 
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 10,
  },
});

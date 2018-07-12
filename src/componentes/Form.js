import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import Input from './Input';
import { adicionarTarefa } from '../actions';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={
            texto: "",
        }
    }

mudarTexto(texto){
    this.setState({ texto });1
}
btnSalvar(){
    this.props.dispatchAdicionarTarefa(this.state.texto); // forma 1 e 2 de fazer
    //this.props.adicionarTarefa(this.state.texto); // forma 3 de fazer 
    this.setState({ texto: "" });
}
  render() {
    const{ texto } = this.state;
    return (
      <View style={styles.containe}>
            <View style={styles.input}>
                <Input onChangeText={texto => this.mudarTexto(texto)} value={texto} />
            </View>
            <View style={styles.botao}>
                <Button onPress={() => this.btnSalvar()} title="Salvar"/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containe:{
    flexDirection: 'row',
  },
  input:{
    flex: 6,
  },
  botao:{
    flex: 2,
  }
});

// const dispatchToProps = dispatch => {  // forma 1 de fazer 
//   return {
//    dispatchAdicionarTarefa: texto => dispatch(adicionarTarefa(texto))
//   }
// }

//const dispatchToProps ={ // forma 3 de fazer 
//    adicionarTarefa
//  }

const dispatchToProps = {  // forma 2 de fazer
  dispatchAdicionarTarefa: adicionarTarefa
}

export default connect(null, dispatchToProps)(Form);
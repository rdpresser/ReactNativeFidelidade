import React from 'react';
import Config from 'react-native-config';
import { ScrollView, Text, View, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { API } from '../Services/ServiceApi';

export default class PremiacaoProduto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      saldo: 0
    };
  }

  async componentDidMount() {
    //const saldo = await getUserSaldo();
    const url = Config.API_PREMIACAO;
    console.log(url);

    const resultRequest = await API.get(url);
    if (resultRequest.status !== 200) {
      Alert.alert(resultRequest.statusText);
      return;
    }
    
    ///////////
    console.log(resultRequest.data);    

    //this.setState({ saldo });
    //console.log(this.state.saldo);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          <Card title='Pontuação atual'>
            <Text style={{ marginBottom: 10 }}>
              Valor: {this.state.saldo}
            </Text>
          </Card>
      </ScrollView>
    </View>
    );
  }
}

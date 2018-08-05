import React from 'react';
import Config from 'react-native-config';
import { ScrollView, View, Alert } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API } from '../Services/ServiceApi';

let list = [];

export default class PremiacaoProduto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
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
    list = resultRequest.data.value;
    this.setState({ list });
    //console.log(this.state.saldo);
  }

  render() {        
    return (
      <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          <Card title='Prêmios disponíveis'>
          <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                leftIcon={(<Icon name="rocket" size={30} color="#900" />)}
                key={i}
                title={l.nome}
              />
            ))
          }
        </List>
          </Card>
      </ScrollView>
    </View>
    );
  }
}

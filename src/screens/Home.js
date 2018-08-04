import React from 'react';
import Config from 'react-native-config';
import { ScrollView, Text, View, Alert } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import { getUserLogin, setUserLoginName } from '../auth';
import { API } from '../Services/ServiceApi';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      saldo: 0
    };
  }

  async componentWillMount() {
    const url = `${Config.API_SALDO}'${await getUserLogin()}'`;
    console.log('url', url);
    const resultRequest = await API.get(url);
    if (resultRequest.status !== 200) {
      Alert.alert(resultRequest.statusText);
      return;
    }
    console.log('resultRequest', resultRequest);
    const { saldo, nome } = resultRequest.data[0];

    setUserLoginName(nome);

    this.setState({ saldo: Number(saldo.toString()) });
    console.log('saldo', saldo);
    console.log('this.state.saldo', this.state.saldo);
    // console.log('nome', nome);
    //console.log('teste', teste);
  }

  render() {
    const { saldo } = this.state;
    console.log('saldo2', saldo);
    return (
      <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        
          <Card title='Pontuação atual'>
            <Text style={{ marginBottom: 10 }}>
              Valor: {this.state.saldo}
            </Text>

            <Rating
              type="rocket"
              ratingCount={15}
              fractions={0}
              startingValue={saldo}
              imageSize={40}
              onFinishRating={this.ratingCompleted}
              showRating
              style={{ paddingVertical: 10 }}
            />
          </Card>
      </ScrollView>
    </View>
    );
  }
}

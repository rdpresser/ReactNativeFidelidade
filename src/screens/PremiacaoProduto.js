import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class PremiacaoProduto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      saldo: 42
    };
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

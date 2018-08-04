import React from 'react';
import Config from 'react-native-config';
import qs from 'query-string';
import { View, StyleSheet, Alert } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn, getUserInfo } from '../auth';
import { API } from '../Services/ServiceApi';

//const result = async () => await API.get();

export default class SignIn extends React.Component {

  constructor(props) {
    super(props);

    //valores default para efeitos de teste
    this.state = {
      username: '62564463215',
      password: '6256'
    };
  }

  async componentDidMount() {
    const { username, password } = await getUserInfo();
    console.log('username', username);
    console.log('password', password);

    if (username && password) {
      this.setState({
        username: username,
        password: password
      });
    }
  }

  render() {
    return (

      <View style={styles.container}>    
        <Card>
          <FormLabel>Documento</FormLabel>
          <FormInput 
            placeholder='Informe documento...' 
            defaultValue={this.state.username} 
            onChangeText={(username) => this.setState({ username })}
          />

          <FormLabel>Senha</FormLabel>
          <FormInput 
            secureTextEntry 
            placeholder='Informe a senha...'
            defaultValue={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor='#03A9F4'
            title='Login'
            onPress={async () => {
              const { username, password } = this.state;

              //validação simples, a API suporta apenas login entre sistemas, e não usuário final
              if (username.substr(0, 4) !== password) { 
                Alert.alert('Informações de Cliente estão inválidas');
                return;
              }

              const requestBody = {
                grant_type: 'password',
                documento: '78775770000101', 
                plataforma: '51E05B67-8F89-4EFB-9B74-75C486C8BB93'
              };

              const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              };

              const resultRequest = await API.post(
                      Config.API_TOKEN, qs.stringify(requestBody), config);
              if (resultRequest.status !== 200) {
                Alert.alert(resultRequest.statusText);
                return;
              }
              console.log('resultRequest.data', resultRequest.data);
              //gravar o token
              console.log('this.state', this.state);
              await onSignIn(resultRequest.data, this.state);

              // const resultGet = await API.get(Config.API_CLIENTE);
              // console.log('resultGet', resultGet);

              this.props.navigation.navigate('SignedIn');
            }}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingVertical: 20,
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

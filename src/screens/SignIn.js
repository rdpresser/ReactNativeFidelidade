import React from 'react';
import Config from 'react-native-config';
import qs from 'query-string';
import { View, StyleSheet, Alert } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../auth';
import { API } from '../Services/ServiceApi';

//const result = async () => await API.get();

this.state = {
  username: '62564463215',
  password: '6256'
};

export default ({ navigation }) => (

  <View style={styles.container}>    
        <Card>
          <FormLabel>Documento</FormLabel>
          <FormInput 
            placeholder='Informe documento...' 
            defaultValue='62564463215' 
            onChangeText={(username) => this.setState({ username })}
          />

          <FormLabel>Senha</FormLabel>
          <FormInput 
            secureTextEntry 
            placeholder='Informe a senha...'
            defaultValue='6256'
            onChangeText={(password) => this.setState({ password })}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor='#03A9F4'
            title='Login'
            onPress={async () => {
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

              const { username, password } = this.state;

              if (username.substr(0, 4) !== password) {
                Alert.alert('Informações de Cliente estão inválidas');
                return;
              }

              //console.log(resultRequest.data);
              //gravar o token
              await onSignIn(resultRequest.data, this.state.username, this.state.password);

              // const resultGet = await API.get(Config.API_CLIENTE);
              // console.log('resultGet', resultGet);

              navigation.navigate('SignedIn');
            }}
          />
        </Card>
      </View>
);

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

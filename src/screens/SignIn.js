import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../auth';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Card>
      <FormLabel>Documento</FormLabel>
      <FormInput placeholder='Informe documento...' />
      <FormLabel>Senha</FormLabel>
      <FormInput secureTextEntry placeholder='Informe a senha...' />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor='#03A9F4'
        title='Login'
        onPress={async () => {
          await onSignIn();
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

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { onSignOut } from '../auth';

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title='Rodrigo Presser'>
      <View style={styles.mainCard}>
        <Text style={{ color: 'white', fontSize: 28 }}>RP</Text>
      </View>
      <Button
        backgroundColor='#03A9F4'
        title='Deslogar'
        onPress={async () => {
          await onSignOut();
          navigation.navigate('SignedOut');
        }
      }
      />
    </Card>
  </View>
);

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#bcbec1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 20
  }
});
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { onSignOut, getUserLoginName } from '../auth';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userLoginName: '',
      userInitials: ''
    };
  }

  async componentDidMount() {
    const userLoginName = await getUserLoginName();
    console.log('userLoginName:', userLoginName);

    if (userLoginName) {
      const userInitials = userLoginName.split(' ');
      const initialsName = `${userInitials[0][0]}${userInitials[1][0]}`;
      // console.log('userInitials', userInitials);
      // console.log('userInitials2:', initialsName);

      this.setState({ userLoginName: userLoginName, userInitials: initialsName });
    }
  }

  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title={this.state.userLoginName}>
          <View style={styles.mainCard}>
            <Text style={{ color: 'white', fontSize: 28 }}>{this.state.userInitials}</Text>
          </View>
          <Button
            backgroundColor='#03A9F4'
            title='Deslogar'
            onPress={async () => {
              await onSignOut();
              this.props.navigation.navigate('SignedOut');
            }
          }
          />
        </Card>
      </View>
      );
    }
  }

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

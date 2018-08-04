import React from 'react';
import { RNCamera } from 'react-native-camera';
//import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Text, Avatar } from 'react-native-elements';
import { onSignOut, getUserLoginName } from '../auth';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userLoginName: '',
      userInitials: '',
      showAvatar: false,
      photoUri: ''
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

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, fixOrientation: true };
      const data = await this.camera.takePictureAsync(options);

      this.setState({ showAvatar: true });
      this.setState({ photoUri: data.uri });
      //alert(data.uri);
    }
  }; 

  render() {
    return (
      <View style={styles.container}>
          <Card title={this.state.userLoginName}>
            <View style={styles.mainCard}>
              {!this.state.showAvatar ? 
                <Avatar 
                  large  
                  rounded 
                  //title={this.state.userInitials} 
                  source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg' }}
                  activeOpacity={0.7} 
                />
              : 
              <Avatar 
                large 
                rounded
                source={{ uri: this.state.photoUri }}
                activeOpacity={0.7} 
              />
              }
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
          <RNCamera
                ref={camera => { this.camera = camera; }}
                style={styles.preview}
                type={RNCamera.Constants.Type.front}
                autoFocus={RNCamera.Constants.AutoFocus.off}
                flashMode={RNCamera.Constants.FlashMode.off}
                permissionDialogTitle={'Permissão para usar a camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <Card>
            <Button
              buttonStyle={{ marginTop: 5 }}
              backgroundColor='#03A9F4'
              title='Tirar Foto'
              onPress={this.takePicture.bind(this)}
            />
        </Card>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  mainCard: {
    alignItems: 'center', 
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
});

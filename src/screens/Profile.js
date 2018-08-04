import React from 'react';
import { RNCamera } from 'react-native-camera';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Avatar } from 'react-native-elements';
import { onSignOut, getUserLoginName, setUserImage, getUserImage } from '../auth';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userLoginName: '',
      photoUri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
    };
  }

  async componentDidMount() {
    const userImage = await getUserImage();
    if (userImage) {
      this.setState({ photoUri: userImage });
    }

    const userLoginName = await getUserLoginName();
    if (userLoginName) {
      this.setState({ userLoginName: userLoginName });
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, fixOrientation: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ photoUri: data.uri });
      setUserImage(data.uri);
    }
  }; 

  render() {
    return (
      <View style={styles.container}>
          <Card title={this.state.userLoginName}>
            <View style={styles.mainCard}>
              <Avatar 
                large 
                rounded
                source={{ uri: this.state.photoUri }}
                activeOpacity={0.7} 
              />              
            </View>
            <Button
              backgroundColor='#03A9F4'
              title='Deslogar'
              onPress={async () => {
                await onSignOut();
                setUserImage('');
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

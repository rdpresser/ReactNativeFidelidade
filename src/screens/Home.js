import React from 'react';
import { ScrollView, Text, Linking, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Config from 'react-native-config';

const images = [
  {
    key: 1,
    name: Config.API_BASE_GATEWAY,
    image: require('../images/1.jpg'),
    url: 'https://unsplash.com/photos/C9t94JC4_L8'
  },
  {
    key: 2,
    name: 'Rodrigo Presser 2ss88',
    image: require('../images/2.jpg'),
    url: 'https://unsplash.com/photos/waZEHLRP98s'
  },
  {
    key: 3,
    name: 'Alberto Restifo',
    image: require('../images/3.jpg'),
    url: 'https://unsplash.com/photos/cFplR9ZGnAk'
  },
  {
    key: 4,
    name: 'John Towner',
    image: require('../images/4.jpg'),
    url: 'https://unsplash.com/photos/89PFnHKg8HE'
  }
];

//const response = async () => await API.get().data;

export default class Home extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {images.map(({ name, image, url, key }) => (
          <Card title={`CARD ${key}`} image={image} key={key}>
            <Text style={{ marginBottom: 10 }}>
              Photo by {name}.
            </Text>
            <Button
              backgroundColor='#03A9F4'
              title='VIEW NOW'
              onPress={() => Linking.openURL(url)}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
    );
  }
}

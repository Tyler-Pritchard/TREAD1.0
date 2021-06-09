<script src="http://localhost:8097"></script>
import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
const { height, width } = Dimensions.get('screen');

import Images from '../constants/Images';
import { white } from '../styles/colors';

export default class LandingScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View center>
          <ImageBackground
            source={{  uri: Images.Landing }}
            style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
          />
        </View>
        <View space="between" style={styles.padded}>
          <View space="around" style={{ zIndex: 2 }}>
            <View>
              <View>
                <Text color="white" size={60}>TREAD</Text>
              </View>
              <View row>
                <Text color="white" size={40}>for Situational Awareness</Text>
              </View>
              <Text size={16} color='rgba(255,255,255,0.6)'>
                Don't be a victim. Be Aware.
              </Text>
            </View>
            <View center>
              <Button
                style={styles.button}
                onPress={() => navigation.navigate('SigninScreen')}>
                SIGN IN
              </Button>
            </View>
            <View center>
              <Button
                style={styles.button}
                onPress={() => navigation.navigate('SignupScreen')}>
                SIGN UP
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    position: 'relative',
  },
  button: {
    shadowRadius: 0,
    shadowOpacity: 0,
    color: "white"
  },
});

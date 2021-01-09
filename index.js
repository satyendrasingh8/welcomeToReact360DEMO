import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  VrButton,
  asset,
} from 'react-360';
const {AudioModule} = NativeModules;
export default class welcomeToReact360DEMO extends React.Component {

handleAudio() {
  AudioModule.playEnvironmental({
  source:asset('new.mp3'),
  volume: 1,

  });
  AudioModule.setEnvironmentalParams({
 loop:false
  });
}
 
stopAudio() {
  AudioModule.stopEnvironmental();
}

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick = {()=> {this.handleAudio()}}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
           PLay Sample audio
          </Text>
        </View>
        </VrButton>
        <VrButton onClick = {()=> {this.stopAudio()}}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
           click to stop
          </Text>
        </View>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('welcomeToReact360DEMO', () => welcomeToReact360DEMO);

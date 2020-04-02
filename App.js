/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import {ImageCapture} from './src/components/ImageCaptureModule';
import Upload from './src/components/UploadModule';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filePath: {}
    };
  }

  handleCapture = async(e) => {
    e.preventDefault();
    const resp = await ImageCapture();
    if(resp){
      this.setState({
        filePath: resp
      });
    }
  }
  
  handleUpload = (e) => {
    e.preventDefault();
    Upload(this.state.filePath.uri, "sample_image_1.jpeg", this.state.filePath.type, "s3");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text>
          <Button title="Choose File" onPress={this.handleCapture.bind(this)} />
          <Button title="Upload File" onPress={this.handleUpload.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

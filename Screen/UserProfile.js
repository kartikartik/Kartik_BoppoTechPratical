import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class UserProfile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.header} source={require("../Images/bgImage.jpg")} />

        </View>
        <Image style={styles.avatar} source={require("../Images/profile.png")} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>

            <Text style={styles.titleNameStyle}>Kartik Patel</Text>
            <Text style={styles.TextStyle}>patelkartik787@gmail.com</Text>
            <Text style={styles.TextStyle}>7878575655</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },

  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

  titleNameStyle: {
    height: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 17
  },
  TextStyle: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 14
  },
});

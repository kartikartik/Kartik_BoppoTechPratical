import react from 'react';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default class HomeScreen extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      dataListArr: [],
      foodArr: [
        { productName: "Sandwich", productDetails: "veg material", price: "₹70", image: require("../Images/sanswich.png") },
        { productName: "panir Tikka", productDetails: "spicy with full testy", price: "₹250", image: require("../Images/panir.png") },
        { productName: "Pav Bhaji", productDetails: "pav with full dish", price: "₹120", image: require("../Images/pavbhaji.png") },
        { productName: "Biryani", productDetails: "veg & non-veg biryani", price: "₹160", image: require("../Images/panir.png") },
        { productName: "Sole Bhature", productDetails: "Test & yimme", price: "₹200", image: require("../Images/panir.png") },

      ],
      drinkArr: [
        { productName: "Cococola", productDetails: "Soft Drinks", price: "₹84", image: require("../Images/coco.png") },
        { productName: "Pepsi", productDetails: "Soft Drinks", price: "₹40", image: require("../Images/pepsi.jpg") },
        { productName: "fenta", productDetails: "Soft Drinks", price: "₹50", image: require("../Images/coco.png") },
        { productName: "Sprite", productDetails: "Soft Drinks", price: "₹45", image: require("../Images/spirte.jpg") },
        { productName: "ThumsUp", productDetails: "Soft Drinks", price: "₹70", image: require("../Images/thumsUp.png") },
        { productName: "Juice", productDetails: "Soft Drinks", price: "₹180", image: require("../Images/pepsi.jpg") },
        { productName: "lemonda ", productDetails: "Soft Drinks", price: "₹20", image: require("../Images/spirte.jpg") },

      ],
    };
  }

  componentDidMount() {

    this.setState({
      dataListArr: this.state.foodArr
    })
  }


  componentWillUnmount() {
    // remove event listener
    this.focusListner;
  }



  renderHorizontalItem = ({ item }) => {
    return (
      <View style={{ margin: 2 }}>
        <TouchableOpacity style={styles.card}  >

          <View style={styles.cardContent}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <Image source={item.image} style={{ width: 60, height: 60, borderRadius: 30 }} />

              <View style={{ flexDirection: 'column', marginLeft: 12 }}>
                <Text style={{ fontWeight: "bold" }}>{item.productName}</Text>
                <Text>{item.productDetails}</Text>
              </View>
              <Text style={{ marginLeft: 'auto', textAlignVertical: 'center', fontWeight: "bold", fontSize: 17 }}>{item.price}</Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _handleChangeSegment(event) {
    console.log(event.nativeEvent.selectedSegmentIndex, "nativeEvent");
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex
    });
    console.log(this.state.selectedIndex, "state");

    if (this.state.selectedIndex == 0) {
      this.setState({
        dataListArr: this.state.drinkArr
      })
    } else {
      this.setState({
        dataListArr: this.state.foodArr
      })
    }
  }

  keyExtractor = (item, index) => {
    return index.toString();
  };

  render() {
    const { navigation } = this.props;
    return (

      <View style={styles.container}>

        <SegmentedControl
          values={['Food', 'Drinks']}
          selectedIndex={this.state.selectedIndex}
          backgroundColor="#33C0FF"
          style={
            { margin: 12 }
          }

          onChange={this._handleChangeSegment.bind(this)}
        />

        <FlatList
          style={{}}
          extraData={this.state}
          data={this.state.dataListArr}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderHorizontalItem}
        />



      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#eeeeee"
  },

  cardContent: {
    marginTop: 10
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row'
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'flex-start',
    color: "#008080",
    fontWeight: 'bold'
  },

});

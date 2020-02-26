import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Buttons, Typography, Colors, Spacing } from '../styles';



class SearchForm extends Component {
    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            // place represents user's selection from the
            // suggestions and it is a simplified Google Place object.
        })
        .catch(error => console.log(error.message));  // error is a Javascript Error object
      }
     
      render() {
        return (
          <View style={styles.container}>

            <TouchableOpacity
              style={styles.buttonText}
              onPress={() => this.openSearchModal()}
            >
              <Text style={styles.header}>Pick a Place</Text>
            </TouchableOpacity>
          </View>
        );
      }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: 100,
    borderRadius: 1,
    borderWidth: 2,
    backgroundColor: Colors.background,
    borderRadius: 5,
    margin: 4

},
  buttonText: {
    ...Buttons.text
  },
  header: {
    backgroundColor: 'white',
    height: 50,
    ...Typography.headerText,
  }
});

export default SearchForm;
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
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: 'green',
    height: 900,
    width: "auto",
    paddingTop: 10,
    backgroundColor: Colors.background,
    borderRadius: 5,
    flex: 1,
    paddingVertical: Spacing.base,
},
  buttonText: {
    ...Buttons.text,
  },
  header: {
    height: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
    ...Typography.headerText,
  }
});

export default SearchForm;
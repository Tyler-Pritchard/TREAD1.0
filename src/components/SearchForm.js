import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';


class SearchForm extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  
  render() {
    const { search } = this.state;
    return (
      <SearchBar
        value={search} style={styles.searchBar}
        placeholder="Enter your destination..."
        onChangeText={this.updateSearch}
      />
    );
  }
};

const styles = StyleSheet.create({
  searchBar: {}
});

export default SearchForm;
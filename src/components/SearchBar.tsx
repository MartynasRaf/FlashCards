import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SearchBar = ({value, setValue, style}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        style={{flex: 1}}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Find</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#FF00FF3F',
    height: 50,
    borderRadius: 40,
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  searchButton: {
    justifyContent: 'center',
  },
  searchText: {color: 'white', fontWeight: 'bold', fontSize: 25},
});

export default SearchBar;

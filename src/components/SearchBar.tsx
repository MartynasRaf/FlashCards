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
      <TextInput value={value} onChangeText={text => setValue(text)} />
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
  },
});

export default SearchBar;

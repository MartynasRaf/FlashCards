import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MyFlashCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>1000 German Words</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB443',
    width: '90%',
    height: 80,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
  },
});

export default MyFlashCard;

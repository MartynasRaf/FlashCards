import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const EnumButton = ({
  enumChanged = Function,
  enumList = String,
  style = null,
}) => {
  const [enumIndex, setEnumIndex] = useState(0);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => {
        enumChanged(enumList[(enumIndex + 1) % enumList.length]);
        setEnumIndex(enumIndex + 1);
        return;
      }}>
      <Text style={styles.text}>
        {enumList ? enumList[enumIndex % enumList.length] : null}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {color: 'white', fontWeight: 'bold', fontSize: 14},
});

export default EnumButton;

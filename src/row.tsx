import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface IRow {
  height: string | null;
  width: string | null;
  setHeight: (value: string) => void;
  setWidth: (value: string) => void;
}

export default function Row({height, width, setHeight, setWidth}: IRow) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        value={height || ''}
        onChangeText={setHeight}
        placeholderTextColor="#000"
        inputMode="numeric"
        style={styles.heightInput}
        placeholder="Height"
      />
      <Text style={styles.cross}>x</Text>
      <TextInput
        value={width || ''}
        inputMode="numeric"
        placeholderTextColor="#000"
        onChangeText={setWidth}
        style={styles.heightInput}
        placeholder="Width"
      />
      <Text style={styles.equal}>=</Text>
      <Text style={styles.dimensions}>
        {(Number(height) * Number(width)).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cross: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 10,
  },
  dimensions: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  equal: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 10,
  },
  heightInput: {
    backgroundColor: '#494454',
    padding: 8,
    color: 'white',
    textDecorationColor:'white',
    tintColor:'white',
    overlayColor:'white',
    paddingHorizontal: 20,
    marginLeft: 0,
    margin: 10,
    borderRadius: 10,
  },
});

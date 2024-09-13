import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Select from '../select';
import Row from '../row';
const options = [
  {title: 'Meti', value: 58},
  {title: 'Astar', value: 66},
  {title: 'Jali', value: 60},
  {title: 'sponch', value: 55},
];

type IOption = {
  h: string | null;
  w: string | null;
};
const initialRows = [...Array(5)].map(index => ({
  h: null,
  w: null,
}));
export default function HomePage() {
  const [rows, setRows] = useState<IOption[]>(initialRows);
  const [activeMaterial, setActiveMaterial] = useState(options[0]);
  const [amount, setAmount] = useState('');

  const total = rows.reduce((acc, curr) => {
    return Number(acc) + Number(curr.h) * Number(curr.w);
  }, 0);

  const totalMaterial = total / 39 / activeMaterial.value;

  function setRow(property: 'h' | 'w', index: number, value: string) {
    setRows(rows => {
      const copy = [...rows];
      copy[index][property] = value;
      return copy;
    });
  }

  return (
    <View style={{padding: 20,height:'100%', backgroundColor: '#AEA8BA'}}>
      <Select
        options={options}
        onSelect={option => setActiveMaterial(option)}
      />
      <FlatList
        data={rows}
        renderItem={({item, index}) => (
          <Row
            key={index}
            height={item.h}
            width={item.w}
            setHeight={value => setRow('h', index, value)}
            setWidth={value => setRow('w', index, value)}
          />
        )}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{backgroundColor: '#0276aa',borderRadius:10}}
          onPress={() => setRows(rows => [...rows, {h: null, w: null}])}>
          <Text style={{color: 'white', padding: 10, paddingHorizontal: 30}}>
            Add New
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginLeft: 20}}>
          {totalMaterial.toFixed(4)}
        </Text>
      </View>
      <View>
        <TextInput
          value={amount}
          style={styles.input}
          onChangeText={value => setAmount(value)}
          inputMode="numeric"
          placeholder="Enter Amount To calculate price"
        />
        {amount !== '' && (
          <Text style={{fontSize: 20, marginLeft: 20}}>
            {(totalMaterial * +amount).toFixed(4)}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginVertical: 20,
  },
});

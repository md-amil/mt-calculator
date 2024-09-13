import {useNavigation} from '@react-navigation/native';
import {StackHeaderRightProps} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function RightButtons(_: StackHeaderRightProps) {
  const navigation = useNavigation<any>();
  return (
    <View style={{flexDirection: 'row', }}>
      <TouchableOpacity>
        <Icon name="save" size={25} />
        {/* <Text>Save</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginHorizontal:10}}
        onPress={() => {
          console.log('clicked');
          navigation.navigate('History');
        }}>
        <Icon name="history" size={25} />
      </TouchableOpacity>
    </View>
  );
}

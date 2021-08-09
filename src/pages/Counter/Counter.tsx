import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  addCount,
  decrement,
  increment,
  reset,
} from '../../feature/counter/counter_slice';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>{count}</Text>

      <TouchableOpacity onPress={() => dispatch(increment())}>
        <View>
          <Text>Increment</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <View>
          <Text>Decrement</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(reset())}>
        <View>
          <Text>Reset</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(addCount(5))}>
        <View>
          <Text>Add Custom Count</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

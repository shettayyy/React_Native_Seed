import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  addCount,
  decrement,
  increment,
  reset,
} from '../../feature/counter/counter_slice';
import {
  Button,
  Layout,
  StyleService,
  Text,
  TopNavigation,
  useStyleSheet,
} from '@ui-kitten/components';
import { NavProps, RouteNames } from '../../routes/nav_types';

const themedStyles = StyleService.create({
  btn: { margin: 16 },
});

const Counter = ({ navigation }: NavProps[RouteNames.Counter]) => {
  const styles = useStyleSheet(themedStyles);
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <TopNavigation title={RouteNames.Counter} alignment="center" />

      <Text>{count}</Text>

      <Button onPress={() => dispatch(increment())} style={styles.btn}>
        <Text>Increment</Text>
      </Button>

      <Button onPress={() => dispatch(decrement())} style={styles.btn}>
        <Text>Decrement</Text>
      </Button>

      <Button onPress={() => dispatch(reset())} style={styles.btn}>
        <Text>Reset</Text>
      </Button>

      <Button onPress={() => dispatch(addCount(5))} style={styles.btn}>
        <Text>Add Custom Count</Text>
      </Button>

      <Button
        onPress={() => navigation.navigate(RouteNames.Dogs)}
        style={styles.btn}
      >
        <Text>Goto Dogs Screen</Text>
      </Button>
    </Layout>
  );
};

export default Counter;

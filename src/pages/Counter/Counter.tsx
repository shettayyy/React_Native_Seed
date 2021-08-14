import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import {
  addCount,
  decrement,
  increment,
  reset,
} from '../../features/counter/counter_slice';
import {
  Button,
  Card,
  Layout,
  StyleService,
  Text,
  TopNavigation,
  useStyleSheet,
} from '@ui-kitten/components';
import { NavProps, RouteNames } from '../../routes/nav_types';
import { View } from 'react-native';

const themedStyles = StyleService.create({
  btn: { margin: 16 },
  maxFlex: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
});

const Counter = ({ navigation }: NavProps[RouteNames.Counter]) => {
  const styles = useStyleSheet(themedStyles);
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const Header = (
    <View>
      <Text category="h1">Counter</Text>
    </View>
  );

  return (
    <Layout style={styles.maxFlex}>
      <TopNavigation title={RouteNames.Counter} alignment="center" />

      <Card style={styles.card} header={Header}>
        <Text>{count}</Text>
      </Card>

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

// Do this so that sentry can track the name of component names even if the code is minified
// You can also ask metro config to not minify function names but that can increase the file size
Counter.displayName = 'Counter';
export default Counter;

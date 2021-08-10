import {
  Button,
  Icon,
  Layout,
  Text,
  StyleService,
  useStyleSheet,
  TopNavigation,
  IconProps,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { useFetchBreedsQuery } from '../../feature/dogs/dogs_api_slice';
import { NavProps, RouteNames } from '../../routes/nav_types';

const themedStyles = StyleService.create({
  btn: { margin: 16 },
});

const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

const Dogs = ({ navigation }: NavProps[RouteNames.Dogs]) => {
  // const count = useAppSelector(state => state.counter.value);
  // const dispatch = useAppDispatch();
  const styles = useStyleSheet(themedStyles);
  const { data = [], isFetching } = useFetchBreedsQuery(20);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigation.goBack} />
  );

  if (isFetching) {
    return (
      <Layout>
        <Text>Loading...</Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <TopNavigation
        title={RouteNames.Dogs}
        alignment="center"
        accessoryLeft={BackAction}
      />

      <Text>Number of dogs: {data.length}</Text>

      {/* Eva Icon rendering example  */}
      <View>
        <Icon name="bar-chart-2-outline" width={30} height={30} fill="red" />
      </View>

      <View>
        {data.map(breed => (
          <View key={breed.id}>
            <Text>{breed.name}</Text>
          </View>
        ))}
      </View>

      <Button onPress={navigation.goBack} style={styles.btn}>
        <Text>Goto Counter Screen</Text>
      </Button>
    </Layout>
  );
};

export default Dogs;

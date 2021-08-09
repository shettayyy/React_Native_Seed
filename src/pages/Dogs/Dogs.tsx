import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { useFetchBreedsQuery } from '../../feature/dogs/dogs_api_slice';

const Dogs = () => {
  // const count = useAppSelector(state => state.counter.value);
  // const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedsQuery(20);

  if (isFetching) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Layout>
      <Text>Number of dogs: {data.length}</Text>

      <View>
        {data.map(breed => (
          <View key={breed.id}>
            <Text>{breed.name}</Text>
          </View>
        ))}
      </View>
    </Layout>
  );
};

export default Dogs;

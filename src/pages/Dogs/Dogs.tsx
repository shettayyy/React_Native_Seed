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
  Card,
  List,
  Avatar,
} from '@ui-kitten/components';
import React from 'react';
import { ListRenderItemInfo, View, ViewProps } from 'react-native';
import { Breed, useFetchBreedsQuery } from '../../features/dogs/dogs_api_slice';
import { NavProps, RouteNames } from '../../routes/nav_types';

const themedStyles = StyleService.create({
  btn: { margin: 16 },

  maxFlex: {
    flex: 1,
  },

  card: {
    margin: 16,
  },

  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  item: {
    marginVertical: 4,
  },

  temperamentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  temperament: {
    width: '80%',
    paddingLeft: 8,
  },
});

const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

const Dogs = ({ navigation }: NavProps[RouteNames.Dogs]) => {
  const styles = useStyleSheet(themedStyles);
  const { data = [], isFetching } = useFetchBreedsQuery(20);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigation.goBack} />
  );

  if (isFetching) {
    return (
      <Layout style={styles.maxFlex}>
        <Text>Loading...</Text>
      </Layout>
    );
  }

  const Header = (
    <View>
      <Text category="h1">Number of Dogs</Text>
    </View>
  );

  const renderItemHeader = (
    headerProps: ViewProps | undefined,
    breed: Breed,
  ) => (
    <View {...headerProps}>
      <Text category="h6">{breed.name}</Text>
    </View>
  );

  const renderItemFooter = (
    footerProps: ViewProps | undefined,
    breed: Breed,
  ) => <Text {...footerProps}>{breed.life_span}</Text>;

  const renderItem = ({ item }: ListRenderItemInfo<Breed>) => (
    <Card
      style={styles.item}
      status="basic"
      header={headerProps => renderItemHeader(headerProps, item)}
      footer={footerProps => renderItemFooter(footerProps, item)}
    >
      <View style={styles.temperamentWrapper}>
        <Avatar size="giant" source={{ uri: item.image.url }} />
        <Text category="p2" style={styles.temperament}>
          {item.temperament}
        </Text>
      </View>
    </Card>
  );

  return (
    <Layout style={styles.maxFlex}>
      <TopNavigation
        title={RouteNames.Dogs}
        alignment="center"
        accessoryLeft={BackAction}
      />

      <Card style={styles.card} header={Header}>
        <Text>{data.length}</Text>
      </Card>

      <List
        style={styles.maxFlex}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
      />

      <Button onPress={navigation.goBack} style={styles.btn}>
        <Text>Goto Counter Screen</Text>
      </Button>
    </Layout>
  );
};

// Do this so that sentry can track the name of component names even if the code is minified
// You can also ask metro config to not minify function names but that can increase the file size
Dogs.displayName = 'Dogs';

export default Dogs;

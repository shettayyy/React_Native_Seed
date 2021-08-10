import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum RouteNames {
  Counter = 'Counter',
  Dogs = 'Dogs',
}

export type RootStackParamList = {
  [RouteNames.Counter]: undefined;
  [RouteNames.Dogs]: undefined;
};

export interface NavProps {
  [RouteNames.Counter]: NativeStackScreenProps<
    RootStackParamList,
    RouteNames.Counter
  >;
  [RouteNames.Dogs]: NativeStackScreenProps<
    RootStackParamList,
    RouteNames.Dogs
  >;
}

export enum NAV_KEYS {
  PERSISTENCE_KEY = 'NAVIGATION_STATE',
}

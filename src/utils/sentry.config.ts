import * as Sentry from '@sentry/react-native';
import { SENTRY_DSN } from 'react-native-dotenv';

// Construct a new instrumentation instance. This is needed to communicate between the integration and React
export const routingInstrumentation =
  new Sentry.ReactNavigationV5Instrumentation();

export const sentryInit = () => {
  Sentry.init({
    dsn: SENTRY_DSN,
    debug: !!__DEV__,
    environment: __DEV__ ? 'development' : 'production',
    integrations: [
      new Sentry.ReactNativeTracing({
        routingInstrumentation,
        tracingOrigins: ['localhost', 'starcast.com', /^\//],
      }),
    ],
  });
};

export const captureException = (
  error: any,
  info: {
    message: string;
    filePath: string;
    triggerEventName: string;
  },
) => {
  Sentry.captureException(error, {
    extra: { ...info },
  });
};

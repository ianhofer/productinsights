import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Ciclos',
  slug: 'ciclos-mobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'ciclos',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#FAFAF8',
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.ciclos.mobile',
    infoPlist: {
      NSFaceIDUsageDescription: 'Use Face ID para entrar no Ciclos',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/icon.png',
      backgroundColor: '#FAFAF8',
    },
    package: 'com.ciclos.mobile',
    permissions: ['NOTIFICATIONS', 'RECEIVE_BOOT_COMPLETED'],
  },
  web: {
    bundler: 'metro',
    output: 'single',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    'expo-secure-store',
    '@react-native-community/datetimepicker',
    [
      'expo-notifications',
      {
        icon: './assets/images/icon.png',
        color: '#4CAF50',
        sounds: [],
      },
    ],
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#FAFAF8',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    apiUrl: process.env.API_URL ?? 'http://localhost:3000',
    eas: {
      projectId: 'ciclos-mobile',
    },
  },
});

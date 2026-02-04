import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nelotsavam.app',
  appName: 'Nelotsavam',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;

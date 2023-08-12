import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'builder.vue3',
  appName: 'builder-vue3',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

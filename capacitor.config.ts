import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.jinchen.app',
  appName: 'App',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config

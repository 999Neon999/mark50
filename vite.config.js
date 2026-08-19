import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    // Enable host to allow access from Quest headset on same network
    host: true,
  }
});

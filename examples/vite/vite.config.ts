import { defineConfig } from 'vite'
import { svgBuilder } from '../../dist/esm';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder({ path: './src/assets/svg/', prefix: 'icon' })],
})

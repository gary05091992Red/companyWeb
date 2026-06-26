import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 子路徑：https://gary05091992Red.github.io/companyWeb/
const base = process.env.CI ? '/companyWeb/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})

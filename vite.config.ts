import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react()],
	base: './',
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@assets': '/src/assets',
			'@views': '/src/views',
			'@hooks': '/src/hooks',
			'@services': '/src/services',
			'@routes': '/src/routes',
			'@utils': '/src/utils',
			'@store': '/src/store',
			'@styles': '/src/styles',
			'@types': '/src/types',
		},
	},
})

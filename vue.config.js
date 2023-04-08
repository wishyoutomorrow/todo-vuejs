const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	devServer: {
		proxy: {
			'/api': {
				target: 'http://ifoy-dev.com',
				changeOrigin: true
			}
		}
	},
	transpileDependencies: true,
	css: {
		loaderOptions: {
			scss: {
				additionalData: "@import '@/assets/styles/_variables.scss';"
			}
		}
	}
})

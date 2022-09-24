const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
	//影響index.html取js的取得路徑
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueclitest/'
    : '/',
	
	//預設為dist
	outputDir: 'vueclitest'
})

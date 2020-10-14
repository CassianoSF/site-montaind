const path = require('path');

module.exports = {
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.imba$/,
				loader: 'imba/loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			}, {
				test: /\.css$/,
				loader: 'css-loader',
				options: {
					modules: {
						mode: 'local',
						localIdentName: '[path][name]__[local]--[hash:base64:5]',
						context: path.resolve(__dirname, 'src'),
						hashPrefix: 'my-custom-hash',
					},
				},
			}
		]
	},
	resolve: {
		extensions: [".imba", ".js", ".json", ".css"]
	},
	entry: "./src/app-root.imba",
	output: { 
		publicPath: "/",
		path: __dirname + '/dist', 
		filename: "client.js" 
	}
}
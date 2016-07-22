'use strict';
var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: true,
	entry: ['babel-polyfill', './src/entry.js' ],
	output: {
    path: path.join(__dirname, 'www/dist/'),
		publicPath: ".www/",
    filename: 'bundle.js'
	},
	estlint: {
		configFile: '.eslintrc.json'
	},
	module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
      		plugins: ['transform-es3-member-expression-literals', 'transform-es3-property-literals']
        }
      },

			{ test: /\.html$/, loader: "raw" },
			{ test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
			{ test: /\.(ttf|eot)$/, loader: 'file' },

			{ test: /\.css$/, loaders: [ 'style', 'css' ] },

			{ test: /\.js$/, loader: "eslint-loader", emitError: true, failOnWarning: true }
    ]
	},
	plugins: [
		new webpack.ProvidePlugin({
		})
	]
};

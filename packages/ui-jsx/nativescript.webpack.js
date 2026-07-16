const { getEntryPath } = require('@nativescript/webpack/dist/helpers/platform');
const { resolve } = require('path');

/**
 * @param {typeof import('@nativescript/webpack')} webpack
 */
module.exports = (webpack) => {
	webpack.chainWebpack((config, env) => {
		config.resolve.extensions.prepend('.jsx').prepend('.tsx');

		config.module
			.rule('ts')
			.test(/\.(ts|tsx|jsx)$/)
			.use('ts-loader')
			.tap((options) => {
				return webpack.merge(options, {
					compilerOptions: {
						jsx: 'react-jsx',
						jsxImportSource: __dirname,
					},
				});
			});

		config.module
			.rule('css')
			.test(/\.css$/)
			.exclude.add(/\.module\.css$/)
			.end();

		config.module
			.rule('scss')
			.test(/\.scss$/)
			.exclude.add(/\.module\.scss$/)
			.end();

		config.module
			.rule('jsx-css')
			.test(/\.module\.css$/)
			.use('css-loader')
			.loader('css-loader')
			.options({
				modules: false,
				exportType: 'string',
			})
			.end()
			.use('postcss-loader')
			.loader('postcss-loader');

		config.module
			.rule('jsx-scss')
			.test(/\.module\.scss$/)
			.use('css-loader')
			.loader('css-loader')
			.options({
				modules: false,
				exportType: 'string',
			})
			.end()
			.use('postcss-loader')
			.loader('postcss-loader')
			.end()
			.use('sass-loader')
			.loader('sass-loader')
			.options({
				// helps ensure proper project compatibility
				// particularly in cases of workspaces
				// which may have different nested Sass implementations
				// via transient dependencies
				implementation: require('sass'),
			})
			.end();

		config.when(env.hmr, (config) => {
			const entryPath = getEntryPath();

			// Set up JSX HMR
			config.module
				.rule('hmr-jsx')
				.before('ts')
				.test(/\.(jsx|tsx)$/)
				.exclude.add(/node_modules/)
				.add(entryPath)
				.end()
				.use('jsx-hot-loader')
				.loader(resolve(__dirname, './webpack/jsx-hot-loader'))
				.options({
					appPath: entryPath,
				});
		});
	});
};

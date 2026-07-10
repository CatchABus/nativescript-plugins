const { getEntryPath } = require('@nativescript/webpack/dist/helpers/platform');
const { resolve } = require('path');

/**
 * @param {typeof import('@nativescript/webpack')} webpack
 */
module.exports = (webpack) => {
	webpack.chainWebpack((config, env) => {
		config.resolve.extensions.add('.jsx').add('.tsx');

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
				.loader(resolve(__dirname, './jsx-hot-loader'))
				.options({
					appPath: entryPath,
				});
		});
	});
};

/**
 * @param {typeof import('@nativescript/webpack')} webpack
 */
module.exports = (webpack) => {
	webpack.chainWebpack((config) => {
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
	});
};

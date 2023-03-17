module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use.
			version: 'detect',
		},
		// Tells eslint how to resolve imports
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: { 'react/prop-types': 'off' },
}

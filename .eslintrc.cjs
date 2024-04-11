module.exports = {
	extends: [
		'universe',
		'universe/shared/typescript-analysis',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
		'prettier'
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.d.ts'],
			parserOptions: {
				project: './tsconfig.json'
			}
		}
	],
	settings: {
		'import/resolver': {
			typescript: {} // this loads <rootdir>/tsconfig.json to ESLint
		},
		react: {
			version: 'detect'
		}
	},
	/* for lint-staged */
	globals: {
		__dirname: true
	},
	plugins: ['react', 'react-native', 'jest', 'testing-library', 'prettier'],
	rules: {
		'no-console': 'error',
		'prettier/prettier': 0,
		'react/react-in-jsx-scope': 'off'
	}
}

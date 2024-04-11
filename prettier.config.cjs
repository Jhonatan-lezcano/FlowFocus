/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */
/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	printWidth: 120,
	trailingComma: 'none',
	bracketSpacing: true,
	tabWidth: 2,
	useTabs: true,
	arrowParens: 'always',
	endOfLine: 'auto'
	// plugins: ['@ianvs/prettier-plugin-sort-imports'],
	// importOrder: [
	// 	'.css$',
	// 	'',
	// 	'<TYPES>',
	// 	'<TYPES>^[.]',
	// 	'',
	// 	'^(react(-native)?/(.*)$)|^(react(-native)?$)',
	// 	'',
	// 	'<THIRD_PARTY_MODULES>',
	// 	'',
	// 	'^[./]'
	// ]
}

module.exports = config

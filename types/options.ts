export type ModuleOptions = {
	/**
	 * If `true`, then the modifier names and their values will be converted to kebab-case. \
	 * If `false`, both renders as passed.
	 *
	 * @default true
	 *
	 * @example
	 * // `true` case
	 * const b = bemClassNames({ hyphenate: true })('block');
	 * b(null, { someModifierName: true }) // => block_some-modifier-name
	 * b(null, { someModifier: 'longValue' }) // => block_some-modifier_some-value
	 *
	 * // `false` case
	 * const b = bemClassNames({ hyphenate: false })('block');
	 * b(null, { someModifierName: true }) // => block--someModifierName
	 * b('el', { someModifier: 'longValue' }) // => block__el_someModifier-longValue
	 */
	hyphenate: boolean;

	/**
	 * If passed, it renders in front of the block name.
	 *
	 * @default ''
	 *
	 * @example
	 * const b = bemClassNames({ namespace: 'b-' })('block');
	 * b(null) // => b-block
	 * b('element') // => b-block__element
	 */
	namespace: string;

	/**
	 * Allows to customize delimiters between significant parts of the BEM declaration (element, modifier, modifier value).
	 */
	delimiters: {
		/**
		 * Delimiter between `block` and `element`. \
		 * This one not recommended to change.
		 *
		 * @default '__'
		 */
		element: string;

		/**
		 * Delimiter between `element` and `modifier`. \
		 * Many people prefer change it to `--` to increase readability.
		 *
		 * @default '_'
		 */
		modifier: string;

		/**
		 * Delimiter between `modifier name` and `modifier value` (if needed).
		 *
		 * @default '_'
		 */
		modifierValue: string;
	};
};


export type FunctionOptions = {
	block: string;
	namespace: string;
	element: string;
	modifiers: object;
	mixins: string[];
};

/* eslint-disable unicorn/prefer-ternary */
import { isObject, kebabCase } from '@morev/helpers';
import type { FunctionOptions, ModuleOptions } from '../types';

export default function bemFn(
	{
		namespace, block, element, modifiers, mixins,
	}: FunctionOptions,
	{ hyphenate, delimiters: ds }: ModuleOptions,
) {
	if (!block) return '';

	const root = element
		? namespace + block + ds.element + element
		: namespace + block;

	let stackString = root;

	const doCase = (str: string) => (hyphenate ? kebabCase(str.toString()) : str.toString());

	if (isObject(modifiers)) {
		Object.entries(modifiers).forEach(([modKey, modValue]) => {
			if ([false, null, undefined].includes(modValue as any)) return;
			if (modValue === true) {
				stackString += ` ${root}${ds.modifier}${doCase(modKey)}`;
			} else {
				stackString += ` ${root}${ds.modifier}${doCase(modKey)}${ds.modifierValue}${doCase(modValue as any)}`;
			}
		});
	}

	mixins.length && (stackString += ` ${mixins.join(' ')}`);

	return stackString;
}

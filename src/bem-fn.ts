import { isObject, hyphenate as _hyphenate } from '@morev/helpers';
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

	const stack = [root];

	const doCase = (str: string) => (hyphenate ? _hyphenate(str.toString()) : str.toString());

	if (isObject(modifiers)) {
		Object.entries(modifiers).forEach(([modKey, modValue]) => {
			if ([false, null, undefined].includes(modValue as any)) return;
			if (modValue === true) {
				stack.push(root + ds.modifier + doCase(modKey));
			} else {
				stack.push(root + ds.modifier + doCase(modKey) + ds.modifierValue + doCase(modValue as any));
			}
		});
	}

	mixins.length && stack.push(mixins.join(' '));

	return stack.join(' ');
}

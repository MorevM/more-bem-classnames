import { isString, isObject, defaults } from '@morev/helpers';
import type { FunctionOptions, ModuleOptions } from '../types';

import { defaultOptions } from './defaults';
import bemFn from './bem-fn';

const moreBemClassnames = (userOptions?: Partial<ModuleOptions>) => {
	const options = defaults(defaultOptions, userOptions ?? {}) as NonNullable<ModuleOptions>;

	return (block: string) => (el?: string | object, ...args: Array<string | object>) => {
		const result: FunctionOptions = {
			block,
			namespace: options.namespace,
			element: '',
			modifiers: {},
			mixins: [],
		};

		isString(el) && (result.element = el);
		isObject(el) && (result.modifiers = el);

		args.forEach(arg => {
			isString(arg) && (result.mixins.push(arg));
			isObject(arg) && (result.modifiers = { ...result.modifiers, ...arg });
		});

		return bemFn(result, options);
	};
};

export default moreBemClassnames;

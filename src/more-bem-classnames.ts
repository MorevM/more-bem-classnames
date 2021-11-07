import { FunctionOptions, ModuleOptions } from '../types';

import { isString, isObject, mergeDeep } from './utils';
import { defaultOptions } from './defaults';
import bemFn from './bem-fn';

const moreBemClassnames = (userOptions?: ModuleOptions) => {
	const options = <ModuleOptions>mergeDeep(defaultOptions, userOptions);

	return (block: string) => (el?: string|object, ...args: (string|object)[]) => {
		const result: FunctionOptions = {
			block,
			namespace: options.namespace,
			element: '',
			modifiers: {},
			mixins: [],
		};

		isString(el) && (result.element = el as string);
		isObject(el) && (result.modifiers = el as object);

		args.forEach(arg => {
			isString(arg) && (result.mixins.push(arg as string));
			isObject(arg) && (result.modifiers = { ...result.modifiers, ...arg as object });
		});

		return bemFn(result, options);
	}
}

export default moreBemClassnames;

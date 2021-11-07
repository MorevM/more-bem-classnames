import {IObject} from '../types/global';

export const isString = (val: any): boolean => {
	return Object.prototype.toString.call(val) === '[object String]';
}

export const isObject = (val: any): boolean => {
	return typeof val == 'object' && val instanceof Object && !(val instanceof Array);
}

export const toKebabCase = (str: string|number): string => {
	return str.toString().replace(/\B([A-Z])/g, '-$1').toLowerCase();
}

export const mergeDeep = (target: IObject, source: IObject): object => {
  const result = Object.assign({}, target);
	if (!isObject(target) || !isObject(source)) return result;

	Object.keys(source).forEach(key => {
		if (isObject(source[key])) {
			if (target[key]) {
				result[key] = mergeDeep(target[key], source[key]);
			} else {
				Object.assign(result, {[key]: source[key]});
			}
		} else {
			Object.assign(result, { [key]: source[key] });
		}
	});

  return result;
}

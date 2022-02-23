import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const plugins = [
	commonjs(),
	resolve(),
	typescript({ tsconfig: './tsconfig.json' }),
	terser(),
	filesize(),
];

export default [
	{
		input: 'src/more-bem-classnames.ts',
		output: {
			name: 'more-bem-classnames',
			file: pkg.browser,
			format: 'umd',
		},
		plugins,
	},
	{
		input: 'src/more-bem-classnames.ts',
		plugins,
		output: [
			{ file: pkg.main, format: 'cjs', exports: 'default' },
			{ file: pkg.module, format: 'es', exports: 'default' },
		],
	},
];

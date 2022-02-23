import type { ModuleOptions, FunctionOptions } from './options';

/**
 * Converts passed strings/objects into valid class name.
 *
 * @param   {string|null}     el     The name of the element, can be omitted (or `null`) if you need to interact with the modifiers and mixins of the block itself.
 *   @default null
 *   @example
 *     const b = bemClassNames()('block');
 *     b(null); b(); // => 'block'
 *     b(null, {modifier: true}); => 'block_modifier'
 *     b('element'); // => 'block__element'
 * @param   {string|object}   args   List of mixins (if passed string) and modifiers (if passed object). \
 *   @example
 *     const b = bemClassNames()('block');
 *     b(null, 'mixin'); // => 'block mixin'
 *     b(null, {modifier: true}); => 'block_modifier'
 *     b('element', {active: true}, 'static'); // => 'block__element block__element--active static'
 */
declare function BemFn(el?: string | null, ...args: Array<string | object>): string;

/**
 * Returns a factory for creation BEM class names for specified block name.
 *
 * @param   {string}   block   Block name.
 *                             It's recommended to use it every time when you need BEM entities with different options (such as `namespace`).
 *   @example
 *     const blockFactory = bemClassNames();
 *     blockFactory('block')(); // => 'block'
 *
 *     const namespacedBlockFactory = bemClassNames({namespace: 'b-'});
 *     namespacedBlockFactory('block')(); // => 'b-block'
 */
declare function BlockFactory(block: string): typeof BemFn;

/**
 * Returns a factory for creation classes in BEM notation with the specified settings. \
 * Allows to redefine module defaults.
 *
 * @param   {object}   userOptions   Module settings
 */
declare function moreBemClassnames(userOptions: ModuleOptions): typeof BlockFactory;

export type { ModuleOptions, FunctionOptions };

export default moreBemClassnames;

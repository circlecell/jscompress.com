/*eslint new-cap: ["error", {"capIsNewExceptions": ["UglifyJS.Compressor"]}]*/

import MK from 'matreshka';
import UglifyJS from 'exports?UglifyJS!uglify-js/uglify-js-browser';

export default window.app = new class Application extends MK {
	constructor() {
		super()
			.bindNode({
				input: '#input',
				output: '#output'
			})
			.linkProps('output', 'input', this.minify, { debounce: true });
			//.onDebounce('input::input', () => this.output);
		//console.log('Hello world');
		//alert('hello world');
	}

	minify(code) {
		const compressor = UglifyJS.Compressor({});
		let ast = UglifyJS.parse(code);

		ast.figure_out_scope();
		ast = ast.transform(compressor);
		ast.mangle_names();
		return ast.print_to_string();
	}
};

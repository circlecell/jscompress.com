/* eslint new-cap: ["error", {"capIsNewExceptions": ["UglifyJS.Compressor"]}] */
import UglifyJS from 'exports?UglifyJS!uglify-js/uglify-js-browser';

export default function minify(code) {
	const compressor = UglifyJS.Compressor({});
	let ast = UglifyJS.parse(code);

	ast.figure_out_scope();
	ast = ast.transform(compressor);
	ast.mangle_names();
	return ast.print_to_string();
}

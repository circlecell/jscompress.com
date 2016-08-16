import getUglifyJS from './get-uglify-js';

export default function minify(code) {
    const UglifyJS = getUglifyJS();
    const compressor = UglifyJS.Compressor({});
    let ast = UglifyJS.parse(code);

    ast.figure_out_scope();
    ast = ast.transform(compressor);
    ast.mangle_names();
    return ast.print_to_string();
}

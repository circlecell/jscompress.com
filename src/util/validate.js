import UglifyJS from 'exports?UglifyJS!uglify-js/uglify-js-browser';

export default function validate(code) {
	let isValid = true,
		error = null;

	if (!code) {
		isValid = false;
		error = 'Falsy value is not valid code';
	} else {
		try {
			UglifyJS.parse(code);
		} catch (e) {
			const { line, col, pos, message = 'Unknown error' } = e;
			let info = '';

			if (line || col || pos) {
				info = ` (line: ${line}, col: ${col}, pos: ${pos})`;
			}

			isValid = false;
			error = message + info;
		}
	}

	return { isValid, error };
}

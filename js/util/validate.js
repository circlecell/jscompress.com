import getUglifyJS from './get-uglify-js';

export default function validate(code) {
    const UglifyJS = getUglifyJS();
    let isValid = true;
    let error = null;

    if (!code) {
        isValid = false;
        error = 'Falsy value is not valid code';
    } else {
        try {
            UglifyJS.parse(code);
        } catch (e) {
            const { line, col, message = 'Unknown error' } = e;
            let info = '';

            if (line || col) {
                info = ` (line: ${line}, col: ${col})`;
            }

            isValid = false;
            error = message + info;
        }
    }

    return { isValid, error };
}

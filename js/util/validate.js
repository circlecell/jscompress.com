import { useECMAScriptNext } from './use-ecmascript-next';
import UglifyJS from './uglify-js-browser';

function uglifyValidate(code) {
  const { error: resultError } = UglifyJS.minify(code);

  if (resultError) {
    const { line, col, message = 'Unknown error' } = resultError;
    let info = '';

    if (line || col) {
      info = ` (line: ${line}, col: ${col})`;
    }

    return {
      isValid: false,
      error: message + info
    };
  }

  return {
    isValid: true,
    error: null
  };
}

async function babelValidate(code) {
  try {
    (await import('./babelTransform')).default(code);
  } catch (e) {
    return {
      isValid: false,
      error: `${e}`
    };
  }

  return { isValid: true };
}

export default function validate(code) {
  if (code === '') {
    return {
      isValid: false,
      error: 'Empty string is not valid code'
    };
  }

  return useECMAScriptNext ? babelValidate(code) : uglifyValidate(code);
}

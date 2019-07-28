import { useECMAScriptNext } from './use-ecmascript-next';
import UglifyJS from './uglify-js-browser';
import babelTransform from './babelTransform';

export default async function minify(code) {
  return useECMAScriptNext ? babelTransform(code) : UglifyJS.minify(code).code;
}

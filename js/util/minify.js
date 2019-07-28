import { useECMAScriptNext } from './use-ecmascript-next';
import UglifyJS from './uglify-js-browser';

export default async function minify(code) {
  return useECMAScriptNext ? (await import('./babelTransform')).default(code) : UglifyJS.minify(code).code;
}

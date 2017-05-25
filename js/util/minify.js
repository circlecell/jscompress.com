import { transform as babiliTransform } from 'babili-standalone';
import { useECMAScriptNext } from './use-ecmascript-next';
import UglifyJS from './uglify-js-browser';

export default function minify(code) {
    return useECMAScriptNext ? babiliTransform(code).code : UglifyJS.minify(code).code;
}

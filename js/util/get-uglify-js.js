/* eslint-disable max-len, import/no-unresolved, import/no-extraneous-dependencies */
import UglifyJS from 'exports?UglifyJS!uglify-js/uglify-js-browser';
import UglifyJSNext from 'exports?UglifyJS!../../uglify-js-next/node_modules/uglify-js/uglify-js-browser';

let useNext = false;
export const setUseECMAScriptNext = value => {
    useNext = value;
};

export default function getUglifyJS() {
    return useNext ? UglifyJSNext : UglifyJS;
}

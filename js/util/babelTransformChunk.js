import minify from 'babel-preset-minify';
import { transform, registerPreset } from '@babel/standalone';

registerPreset('minify', minify);

export default function babelTransform(code) {
  return transform(code, { presets: [['minify', { builtIns: false }]], comments: false }).code;
}

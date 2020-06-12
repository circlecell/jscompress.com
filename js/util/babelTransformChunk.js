import minify from 'babel-preset-minify';
import { transform, registerPreset, registerPlugin } from '@babel/standalone';
import syntaxImportMeta from '@babel/plugin-syntax-import-meta';

registerPreset('minify', minify);
registerPlugin('@babel/plugin-syntax-import-meta', syntaxImportMeta);

export default function babelTransform(code) {
  return transform(code, {
    presets: [['minify', { builtIns: false }]],
    plugins: ['@babel/plugin-syntax-import-meta'],
    comments: false
  }).code;
}

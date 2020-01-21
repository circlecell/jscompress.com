import { className } from 'seemple/binders';
import { dropFiles, dragOver, file } from 'file-binders';
import Tab from '../tab';
import FileList from './file-list';
import validate from '../../util/validate';

export default class Upload extends Tab {
  constructor(...args) {
    super(...args)
      .instantiate('fileList', FileList)
      .bindNode({
        fileWrapper: ':sandbox .file-wrapper',
        files: [{
          node: ':bound(fileWrapper)',
          binder: dropFiles('text')
        }, {
          node: ':sandbox .file-input',
          binder: file('text')
        }],
        dragovered: [{
          node: ':bound(fileWrapper)',
          binder: dragOver()
        }, {
          node: ':bound(fileWrapper)',
          binder: className('dragovered')
        }],
        'fileList.length': {
          node: ':sandbox .clear, :sandbox .compress',
          binder: {
            setValue(v) {
              this.disabled = !v;
            }
          }
        }
      })
      .on({
        'change:files': () => {
          this.fileList.push(...this.files.map(({
            name, readerResult
          }) => ({
            name, readerResult
          })));
        },
        'click::(.clear)': () => {
          this.fileList.recreate();
          this.error = '';
        },
        'click::(.compress)': async () => {
          const errors = [];
          const results = [];

          for (const item of this.fileList) {
            const { readerResult, name } = item;
            const { isValid, error } = await validate(readerResult);

            results.push(readerResult);

            if (!isValid) {
              errors.push(`File ${name}: ${error}`);
            }
          }

          if (errors.length) {
            this.error = errors.join('\n');
          } else {
            this.error = '';

            this.trigger('submitCode', results.join(';'));
          }
        }
      });
  }
}

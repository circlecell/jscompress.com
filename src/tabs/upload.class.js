import Tab from './tab.class';
import FileList from './file-list.class';
import MK from 'matreshka';

const { dropFiles, file, className, dragOver } = MK.binders;

export default class Upload extends Tab {
	constructor(...args) {
		super(...args)
			.setClassFor('fileList', FileList)
			.bindNode({
				fileWrapper: ':sandbox .file-wrapper',
				files: [':bound(fileWrapper)', dropFiles('text')],
				length: [':sandbox .clear, :sandbox .compress', {
					setValue(v) {
						this.disabled = !v;
					}
				}],
				dragovered: [':bound(fileWrapper)', dragOver()]
			})
			.bindNode({
				files: [':sandbox .file-input', file('text')],
				dragovered: [':bound(fileWrapper)', className('dragovered')]
			})
			.on({
				'change:files': () => {
					this.fileList.push(...this.files.map(
						({name, readerResult}) => ({name, readerResult})
					))
				},
				'click::(.clear)': () => this.fileList.recreate(),
				'click::(.compress)': () => {
					this.trigger('submitCode', this.fileList.map(item => item.readerResult).join(';'));
				}
			})

	}
}

import minify from './minify';
import MK from 'matreshka';
import tabNavBinder from './tab-nav.binder';
import tabPaneBinder from './tab-pane.binder';

const {
	dropFiles, file, prop
} = MK.binders;

const getJSBlob = data => new Blob([data], {
    type: 'text/javascript'
});

module.exports = new class Application extends MK {
	constructor() {
		super()
			.set({
				activeTabName: 'copy-paste'
			})
			.bindNode({
				code: '#code',
				output: '#output',
				outputDataURI: ['#download', prop('href')],
				activeTabName: ['.tab-nav > li', tabNavBinder()],
				files: ['#upload', dropFiles('text')],
			})
			.bindNode({
				activeTabName: ['.tabs > .tab-pane', tabPaneBinder()],
				files: ['#upload-input', file('text')]
			})
			.linkProps('input', 'code', null, {
				setOnInit: false,
				debounce: true
			})
			.linkProps('input', 'files', files => files.map(file => file.readerResult).join(';'), {
				setOnInit: false
			})
			.linkProps('inputBlob', 'input', getJSBlob)
            .linkProps('inputSize', 'inputBlob', blob => blob.size)
			.linkProps('output', 'input', minify, {
				debounce: true,
				setOnInit: false
			})
			.linkProps('outputBlob', 'output', getJSBlob)
			.linkProps('outputDataURI', 'outputBlob', URL.createObjectURL)
			.linkProps('outputSize', 'outputBlob', blob => blob.size)
			.linkProps('compression', 'inputSize outputSize', (inSize, outSize) => 100 - outSize / inSize * 100)
			.linkProps('saving', 'inputSize outputSize', (inSize, outSize) => (inSize - outSize) / 1024)
			.on({
				'change:files': () => this.set('code', '', {
					skipLinks: true
				}),
				'change:output': () => this.activeTabName = 'output'
			});
	}

};

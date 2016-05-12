/*eslint new-cap: ["error", {"capIsNewExceptions": ["UglifyJS.Compressor"]}]*/

import MK from 'matreshka';
import UglifyJS from 'exports?UglifyJS!uglify-js/uglify-js-browser';

module.exports = new class Application extends MK {
	constructor() {
		super()
            .set({ activeTabName: 'copy-paste' })
			.bindNode({
				code: '#code',
				output: '#output'
			})
            .bindNode('activeTabName', '.tab-nav > li', {
                on: 'click',
                setValue(v) {
                    this.classList.toggle('active', v == this.dataset.tab);
                },
                getValue() {
                    return this.dataset.tab;
                },
                initialize({ $nodes }) {
                    this.addEventListener('click', () => {
                        for(const node of $nodes) {
                            node.classList.toggle('active', node == this);
                        }
                    });
                }
            })
            .bindNode('activeTabName', '.tabs > div', {
                setValue(v) {
                    this.style.display = v === this.id ? '' : 'none';
                }
            })
            .bindNode('files', '#upload', MK.binders.dropFiles())
            .bindNode('files', '#upload-input', MK.binders.file('text'))
            .bindNode('outputDataURI', '#download', MK.binders.prop('href'))
            .linkProps('input', 'code', null, { setOnInit: false })
            .linkProps('input', 'files', files => files.map(file => file.readerResult).join(';'),  { setOnInit: false })
            .linkProps('inputSize', 'input', input => new Blob([input], {type: 'text/javascript'}).size)
			.linkProps('output', 'input', this.minify, { debounce: true, setOnInit: false })
            .linkProps('outputBlob', 'output', output => new Blob([output], {type: 'text/javascript'}))
            .linkProps('outputDataURI', 'outputBlob', URL.createObjectURL)
            .linkProps('outputSize', 'outputBlob', blob => blob.size)
            // NOT WORK
            .linkProps('compression', 'inputSize outputSize', (inSize, outSize) => 100-outSize/inSize*100)
            // NOT WORK
            .linkProps('saving', 'inputSize outputSize', (inSize, outSize) => (inSize - outSize)/1024)
            .on({
                'change:files': () => this.set('code', '', { skipLinks: true }),
                'change:output': () => this.activeTabName = 'output'
            });
	}

	minify(code) {
		const compressor = UglifyJS.Compressor({});
		let ast = UglifyJS.parse(code);

		ast.figure_out_scope();
		ast = ast.transform(compressor);
		ast.mangle_names();
		return ast.print_to_string();
	}
};

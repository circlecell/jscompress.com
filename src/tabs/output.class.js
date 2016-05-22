import MK from 'matreshka';
import Tab from './tab.class';
import minify from './minify';

const getJSBlob = data => new Blob([data], {
    type: 'text/javascript'
});

const getBlobSize = blob => blob.size;

const { prop } = MK.binders;

export default class Output extends Tab {
	constructor(...args) {
		super(...args)
			.set({
				inputCode: ''
			})
			.bindNode({
				outputDataURI: [':sandbox #download', prop('href')],
				compression: ':sandbox .compression',
				saving: ':sandbox .saving',
				outputCode: ':sandbox .output-code'
			})
			.linkProps('inputBlob', 'inputCode', getJSBlob)
			.linkProps('inputSize', 'inputBlob', getBlobSize)
			.linkProps('outputCode', 'inputCode', minify, { setOnInit: false })
			.linkProps('outputBlob', 'outputCode', getJSBlob)
			.linkProps('outputSize', 'outputBlob', getBlobSize)
			.linkProps('outputDataURI', 'outputBlob', URL.createObjectURL)
			.linkProps('compression', 'inputSize outputSize',
				(inSize, outSize) => 100 - outSize / inSize * 100 || 0)
			.linkProps('saving', 'inputSize outputSize',
				(inSize, outSize) => (inSize - outSize) / 1024);
	}
}

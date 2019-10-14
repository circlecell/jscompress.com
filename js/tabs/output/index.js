import round from 'lodash.round';
import Tab from '../tab';
import minify from '../../util/minify';

const getJSBlob = (data) => new Blob([data], { type: 'text/javascript' });

const getBlobSize = (blob) => blob.size;

export default class Output extends Tab {
  constructor(...args) {
    super(...args)
      .set({
        inputCode: ''
      })
      .bindNode({
        compression: ':sandbox .compression',
        saving: ':sandbox .saving',
        outputCode: ':sandbox .output-code',
        outputDataURI: {
          node: ':sandbox .download',
          binder: {
            setValue(v, { node }) {
              if (v) {
                node.href = v;
                node.download = 'compressed.js';
                node.classList.remove('disabled');
              } else {
                node.removeAttribute('href');
                node.removeAttribute('download');
                node.classList.add('disabled');
              }
            }
          }
        }
      })
      .calc({
        inputBlob: {
          source: 'inputCode',
          handler: getJSBlob
        },
        inputSize: {
          source: 'inputBlob',
          handler: getBlobSize
        },
        outputCode: {
          source: 'inputCode',
          handler: minify,
          event: { setOnInit: false, promiseCalc: true }
        },
        outputBlob: {
          source: 'outputCode',
          handler: getJSBlob
        },
        outputSize: {
          source: 'outputBlob',
          handler: getBlobSize
        },
        outputDataURI: {
          source: 'outputBlob',
          handler: async (outputBlob) => {
            if (!outputBlob) {
              return null;
            }

            return URL.createObjectURL(outputBlob);
          },
          event: { promiseCalc: true }
        },
        compression: {
          source: ['inputSize', 'outputSize'],
          handler: (inSize, outSize) => round(100 - ((100 * outSize) / inSize) || 0, 2)
        },
        saving: {
          source: ['inputSize', 'outputSize'],
          handler: (inSize, outSize) => round((inSize - outSize) / 1024, 2)
        }
      })
      .on({
        'keypress::outputCode': ({ domEvent }) => {
          // allow to use ctrl + A, ctrl + C etc
          if (!domEvent.ctrlKey) {
            domEvent.preventDefault();
          }
        },
        'change:active': ({ value }) => {
          if (value) {
            setTimeout(() => {
              this.nodes.outputCode.focus();
              this.nodes.outputCode.select();
            }, 50);
          }
        }
      });
  }
}

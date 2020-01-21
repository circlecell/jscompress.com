import SeempleObject from 'seemple/object';
import Upload from './tabs/upload';
import CopyPaste from './tabs/copy-paste';
import Output from './tabs/output';
import { setUseECMAScriptNext } from './util/use-ecmascript-next';

class Application extends SeempleObject {
  constructor() {
    super()
      .set({
        activeTabName: 'upload',
        useECMAScriptNext: !!localStorage.useECMAScriptNext
      })
      .addDataKeys(['upload', 'copyPaste', 'output'])
      .instantiate({
        upload: Upload,
        copyPaste: CopyPaste,
        output: Output
      })
      .bindNode('useECMAScriptNext', '.use-ecmascript-next')
      .on('change:useECMAScriptNext', () => {
        const { useECMAScriptNext } = this;

        setUseECMAScriptNext(useECMAScriptNext);

        if (useECMAScriptNext) {
          localStorage.useECMAScriptNext = 'y';
        } else {
          delete localStorage.useECMAScriptNext;
        }
      }, true)
      .on({
        '*@change:active': (evt) => {
          if (evt.value === true) {
            for (const tab of this) {
              if (tab !== evt.self) {
                tab.active = false;
              }
            }
          }
        },
        'upload@submitCode copyPaste@submitCode': (code) => {
          this.output.active = true;
          this.output.inputCode = code;
        }
      });
  }
}

export default new Application();

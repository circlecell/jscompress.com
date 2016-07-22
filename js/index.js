import MK from 'matreshka';
import Upload from './tabs/upload.class';
import CopyPaste from './tabs/copy-paste.class';
import Output from './tabs/output.class';

module.exports = new class Application extends MK.Object {
    constructor() {
        super()
            .set({
                activeTabName: 'upload'
            })
            .addDataKeys('upload copyPaste output')
            .setClassFor({
                upload: Upload,
                copyPaste: CopyPaste,
                output: Output
            })
            .on({
                '*@change:active': evt => {
                    if (evt.value === true) {
                        for (const tab of this) {
                            if (tab !== evt.self) {
                                tab.active = false;
                            }
                        }
                    }
                },
                'upload@submitCode copyPaste@submitCode': code => {
                    this.output.active = true;
                    this.output.inputCode = code;
                }
            });
    }

};

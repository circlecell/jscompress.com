import Tab from '../tab';
import validate from '../../util/validate';

export default class CopyPaste extends Tab {
  constructor(...args) {
    super(...args)
      .set({
        active: true
      })
      .bindNode({
        form: ':sandbox form[name="copyPasteForm"]',
        code: ':bound(form) [name="code"]'
      })
      .on({
        'submit::form': async (evt) => {
          evt.preventDefault();

          const { code } = this;
          const { isValid, error } = await validate(code);

          if (!isValid) {
            this.error = error;
          } else {
            this.error = '';
            this.trigger('submitCode', code);
          }
        },
        'change:code': () => {
          this.error = '';
        }
      });
  }
}

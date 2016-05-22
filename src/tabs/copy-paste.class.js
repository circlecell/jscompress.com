import MK from 'matreshka';
import Tab from './tab.class';

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
				'submit::form': evt => {
					evt.preventDefault();
					this.trigger('submitCode', this.code);
				}
			});
	}
}

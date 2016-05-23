import MK from 'matreshka';

const { display, html } = MK.binders;

export default class Tab extends MK.Object {
	constructor(data = {}, app, name) {
		super(data)
			.set({
				active: false
			})
			.bindNode({
				sandbox: `#${name}`,
				navItem: `.tab-nav-item[data-tab="${name}"]`,
				active: [':sandbox', display()]
			})
			.bindOptionalNode('error', ':sandbox .error', html())
			.on({
				'click::navItem': () => {
					this.active = true;
				}
			});
	}
}

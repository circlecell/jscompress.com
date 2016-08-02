import MK from 'matreshka';

const { className } = MK.binders;

export default class Tab extends MK.Object {
    constructor(data = {}, parent, name) {
        super(data)
            .set({
                active: false
            })
            .bindNode({
                sandbox: `#${name}`,
                navItem: `.tab-nav-item[data-tab="${name}"]`,
                active: [':sandbox', className('!hide')]
            })
            .bindNode({
                active: [':bound(navItem)', className('active')]
            })
            .bindOptionalNode('error', ':sandbox .error')
            .on({
                'click::navItem': () => {
                    this.active = true;
                }
            });
    }
}

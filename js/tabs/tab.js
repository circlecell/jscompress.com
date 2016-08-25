import MatreshkaObject from 'matreshka/object';
import className from 'matreshka/binders/classname';

export default class Tab extends MatreshkaObject {
    constructor(data = {}, parent, name) {
        super(data)
            .set({
                active: false
            })
            .bindNode({
                sandbox: `#${name}`,
                navItem: `.tab-nav-item[data-tab="${name}"]`,
                active: [{
                    node: ':sandbox',
                    binder: className('hide', false)
                }, {
                    node: ':bound(navItem)',
                    binder: className('active')
                }]
            })
            .bindOptionalNode('error', ':sandbox .error')
            .on({
                'click::navItem': () => {
                    this.active = true;
                }
            });
    }
}

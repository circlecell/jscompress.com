import SeempleObject from 'seemple/object';
import { className } from 'seemple/binders';

export default class Tab extends SeempleObject {
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

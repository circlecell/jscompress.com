import MK from 'matreshka';

const { dropFiles, file, className, dragOver } = MK.binders;

export default class FileList extends MK.Array {
	itemRenderer = `
		<div>
			{{name}}
			<span class="remove">REMOVE</span>
		</div>
	`;
	constructor(data = []) {
		super(...data)
			.bindNode({
				sandbox: '#upload',
				container: ':sandbox .file-list',
			})
			.on({
				'*@click::(.remove)': evt => this.pull(evt.self),
			})
			.rerender();
	}
}

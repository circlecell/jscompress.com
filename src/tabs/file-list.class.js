import MK from 'matreshka';

export default class FileList extends MK.Array {
	itemRenderer = `
		<div class="file-item">
			{{name}}
			<span class="remove"></span>
		</div>
	`;
	constructor(data = []) {
		super(...data)
			.bindNode({
				sandbox: '#upload',
				container: ':sandbox .file-list',
			})
			.on({
				'*@click::(.remove)': ({ self }) => this.pull(self)
			})
			.rerender();
	}
}

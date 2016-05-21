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
				fileWrapper: ':sandbox .file-wrapper',
				files: [':bound(fileWrapper)', dropFiles('text')],
				length: [':sandbox .clear, :sandbox .compress', {
					setValue(v) {
						this.disabled = !v;
					}
				}]
			})
			.bindNode({
				files: [':sandbox .file-input', file('text')]
			})
			.on({
				'*@click::(.remove)': evt => this.pull(evt.self),
				'change:files': () => {
					this.recreate(this.files.map(
						({name, readerResult}) => ({name, readerResult})
					))
				},
				'click::(.compress)': () => {
					alert('yey');
				},
				'click::(.clear)': () => this.recreate()
			})
			.bindNode('dragovered', ':bound(fileWrapper)', className('dragovered'))


			.bindNode({// dragOver
		 		dragovered: [':bound(fileWrapper)', dragOver()]
		 	  })
			.rerender();
	}
}


/*
const app = new Matreshka.Class({
  'extends': Matreshka,
  constructor: function() {
	this
	.set('dragovered', false)
	.bindNode('dragovered', '.matreshka-file-wrapper', {
	  on: null,
	  getValue: null,
		 setValue(v) {console.log(this)
		   this.classList.toggle('dragovered', !!v)
		 }
	   })
	  .bindNode({
		sandbox: '.matreshka-file-wrapper',
		dragovered: [':sandbox', {
		  on: 'dragover dragenter dragleave dragend drop',
		  getValue(o) {
			const eventType = o.domEvent && o.domEvent.type;
			if(o.domEvent) {
			  //o.domEvent.preventDefault();
			}
		   console.log(eventType == 'dragover' || eventType == 'dragenter')
			return eventType == 'dragover' || eventType == 'dragenter';
		  },
		  setValue: null
		}]
	  })

	.on('change:dragovered', evt => console.log('ha dragovered', this.dragovered))
  }
});*/

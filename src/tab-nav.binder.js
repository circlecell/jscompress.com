export default function () {
	return {
		on: 'click',
		setValue(v) {
			this.classList.toggle('active', v == this.dataset.tab);
		},
		getValue() {
			return this.dataset.tab;
		},
		initialize({ $nodes }) {
			this.addEventListener('click', () => {
				for(const node of $nodes) {
					node.classList.toggle('active', node == this);
				}
			});
		}
	};
}

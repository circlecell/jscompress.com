export default function() {
	return {
		setValue(v) {
			this.style.display = v === this.id ? '' : 'none';
		}
	};
};

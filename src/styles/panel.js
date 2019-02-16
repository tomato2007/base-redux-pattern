
export default ({ color2 }) => {
	const Panel = {};

	Panel['default'] = {
		padding: 8,
		overflow: 'hidden',
		position: 'relative',

		'&:hover': {
			backgroundColor: color2
		}
	};

	return Panel;
}
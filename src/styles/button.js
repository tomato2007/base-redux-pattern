
export default ({ color1, color2, color4 }) => {
	const Button = {};

	Button['default'] = {
		height: 20,
		fontSize: '10px',
		border:'none',
		borderRadius: 'none',
		padding: '0 4px',
		margin: '3px 1px 3px 0',
		cursor: 'pointer',
		color: color1,
		backgroundColor: color2,
		outline: 'none',
		
		'&:hover, &.active': {
			backgroundColor: color1,
			color: color2
		}
	};

	Button['tab'] = {
		...Button['default'],
		height: 28,
		fontSize: 12,
		marginLeft: -1,
		borderRadius: 0,
		display: 'inline-block',
		border: '1px solid '+ color2,
		backgroundColor: 'transparent',
		'&:hover': {
			color: color1,
			backgroundColor: color2
		}
	};

	Button['icon'] = {
		...Button['default'],
		height: 30,
		width: 32,
		margin: 0,
		padding: 0,
		display: 'inline-block',
		backgroundColor: 'transparent',
		'&:hover': {
			color: color4
		}
	};

	return Button;
}
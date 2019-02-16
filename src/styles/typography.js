
export default ({ color3, color4, color5 }) => {
	const Typography = {};

	Typography['default'] = {
		fontSize: 14,
		fontWeight: 300,
		color: color3
	};

	Typography['title'] = {
		...Typography['default'],
		fontSize: 16,
		display: 'block',
		height: 26,
		lineHeight: '26px',
		fontWeight: 600
	};

	Typography['header'] = {
		...Typography['default'],
		lineHeight: '20px',
		color: color4
	};

	Typography['cell'] = {
		...Typography['header'],
		color: color5
	};

	return Typography;
}
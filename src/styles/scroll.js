
export default () => {
	const Scroll = {};

	Scroll['default'] = {
		height: '100%'
	};

	Scroll['title'] = {
		height: 'calc(100% - 26px)'
	};

	Scroll['titleHeader'] = {
		height: 'calc(100% - 46px)'
	};

	Scroll['titleHeaderFooter'] = {
		height: 'calc(100% - 66px)'
	};

	return Scroll;
}
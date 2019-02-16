import Palette from 'styles/palette.js';
import Panel from 'styles/panel.js';
import Typography from 'styles/typography.js';
import Scroll from 'styles/scroll.js';
import Button from 'styles/button.js';

export default (() => {

	let defaultInput = {};

	return {
		Global: {
			'html': {
				top: 0,
				left: 0,
				width: '100%',
				position: 'fixed',
				fontSize: 14,
				fontFamily: 'arial'
			},
			'html, body, #root': {
				margin: 0,
				padding: 0,
				height: '100%',
				overflow: 'hidden'
			},
			'#root': {
				backgroundColor: Palette['color1']
			},
			'.react-datepicker-popper': {
				left: '-34px !important'
			},
			'.react-datepicker-wrapper, .react-datepicker__input-container': {
				display: 'block !important'
			}
		},

		// colors collection
		Palette,

		// container
		Panel: Panel(Palette),
		
		// text
		Typography: Typography(Palette),
		
		// scrollbar
		Scroll: Scroll(Palette),

		// buttons
		Button: Button(Palette),

		Link: {
			default: {
				color: Palette['color2'],
				textDecoration: 'none',
				'&:hover': {
					color: Palette['color3']
				},
				'&.active': {
					color: Palette['color3']
				}
			}
		},

		Table: {
			default: {
				width: '100%',
				fontSize: 12,
				color: Palette['color3'],
				borderCollapse: 'collapse',
				'& td': {
					padding: '8px 2px',
					borderBottom: '2px solid '+ Palette['color2']
				}
			}
		},
		Input: {
			default: defaultInput = {
				border: '1px solid grey',
				outline: 'none',
				margin: 0,
				height: 20,
				padding: '0 7px',
				color: '#000',
				backgroundColor: 'transparent'
			},
			date: {
				...defaultInput
			}
		},
		Overlay: {
			default: {
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				position: 'fixed',
				backgroundColor: 'rgba(0, 0, 0, .1)',
				zIndex: 2048
			}
		},
		Aside: {
			default: {
				top: 0,
				width: '200px',
				height: '100%',
				position: 'fixed',
				backgroundColor: Palette['color3'],
				zIndex: 2049,
				'& a': {
					paddingLeft: 12,
					display: 'block'
				}
			}
		},
		Dialog: {
			default: {
				top: '6%',
				width: 400,
				minHeight: 200,
				zIndex: 2050,
				left: 'calc(50% - 200px)',
				position: 'fixed',
				backgroundColor: Palette['color3']
			},
			alert: {
				top: 12,
				right: 12,
				width: 262,
				minHeight: 48,
				zIndex: 2049,
				padding: 12,
				position: 'absolute',
				backgroundColor: Palette['color3']
			}
		},
		Select: {
			default: {
				width: '100%',
				display: 'block'
			}
		}
	};
})();
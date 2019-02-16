import React from 'react';
import withStyles from 'react-jss';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { 
	//
// } from 'selectors/commonSelectors.js';
// import {
	//
// } from 'actions/commonActions.js';

const styles = ({ Global }) => ({
	'@global': { 
		...Global,
		'#root': {
			...Global['#root'],
			display: 'grid',
			// gridTemplateAreas: `
			// 	'header header header header'
			// 	'status-total status-active status-lowhash status-fan-issue'
			// 	'status-offlines status-crazy status-hanged status-overheated'
			// 	'charts-tabs charts-tabs charts-tabs charts-regime'
			// 	'chart-panel chart-panel chart-panel chart-panel'
			// `,
			// gridTemplateRows: '54px 128px 128px 48px calc(100% - 382px)',
			// gridTemplateColumns: '25% 25% 25% 25%'
		}
	}
});

class ExamplePage extends React.PureComponent {
	
	render = () => {
		return <React.Fragment>
			Example
		</React.Fragment>
	}
}

const mapStateToProps = (state) => ({
	//
});

const mapDispatchToProps = (dispatch) => ({
	//
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExamplePage));
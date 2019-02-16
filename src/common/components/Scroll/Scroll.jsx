import React from 'react';
import withStyles from 'react-jss';

import ReactScrollbar from 'react-scrollbar';

export default withStyles(({ Scroll = {} }) => ({
	...Scroll
}))(({ 
	children = [],
	variant = 'default',
	className = '', 
	classes
}) => (
	<ReactScrollbar className={classes[variant] +' '+ className}>
		{children}
	</ReactScrollbar>
));
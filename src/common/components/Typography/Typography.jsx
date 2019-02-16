import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Typography = {} }) => ({
	...Typography
}))(({ 
	children = [ 'Text' ], 
	variant = 'default',
	className = '', 
	classes, 
	theme,
	...properties
}) => (
	<span {...properties} className={classes[variant] +' '+ className}>
		{children}
	</span>
));
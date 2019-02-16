import React from 'react';
import withStyles from 'react-jss';

/**
 * Button component to interact with the interface
 * @param {Array} children - Button inner content
 * @param {String} variant - Style variant from theme.js
 * @param {String} className - Selector for custom styles
 * @return {Object}
 */
export default withStyles(({ Button = {} }) => ({
	...Button
}))(({ 
	children = [ 'Text' ], 
	variant = 'default',
	className = '', 
	classes, 
	theme,
	...properties 
}) => (
	<button {...properties}
		className={classes[variant] +' '+ className}>

		{children}
	</button>
));
import React from 'react';
import withStyles from 'react-jss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default withStyles(({ Input = {} }) => ({
	...Input
}))(({ 
	variant = 'default',
	className = '',
	classes, 
	theme,
	...properties 
}) => {
	return variant === 'date' ? 
		<DatePicker {...properties}
			className={classes[variant] +' '+ className}
			customInput={
				<input {...properties.form ? { form: properties.form } : {}} 
					type="search" />
			} /> : 
		<input {...properties}
			className={classes[variant] +' '+ className} />
});
import React from 'react';
import withStyles from 'react-jss';

import Panel from 'common/components/Panel';
import Scroll from 'common/components/Scroll';
import Typography from 'common/components/Typography';

/**
 * Simple table glass component with scroll
 * @param {String} variant - Style variant from theme.js
 */
export default withStyles(({ Glass = {} }) => ({
	...Glass
}))(({ 
	variant = 'default',
	header = [],
	data = [],
	footer = [],
	classes,
	rowClassName = '',
	rowCanvas = false
}) => (
	<React.Fragment>
	{header.length ?
		<Panel className={classes.header}>
		{header.map((item, i) => (
			<Typography key={i} variant="header">{item}</Typography>
		))}
		</Panel> :
		null}

	{data.length ?
		<Scroll variant={variant}>
		{data.map((row, i) => (
			<Panel key={i} className={classes.row +' '+ rowClassName}>
			{row.map((cell, ii) => (
				<Typography key={ii} variant="cell" className={classes.cell}>
					{cell}
				</Typography>
			))}
			{rowCanvas ? <canvas className={classes.canvas}></canvas> : null}
			</Panel>
		))}
		</Scroll> :
		null}

	{footer.length ?
		<Panel className={classes.header}>
		{footer.map((item, i) => (
			<Typography key={i} variant="header">{item}</Typography>
		))}
		</Panel> :
		null}
	</React.Fragment>
));
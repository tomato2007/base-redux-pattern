import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import PageLoadingProcess from 'common/components/PageLoadingProcess';

import { ThemeProvider } from 'react-jss';
import theme from 'theme.js';
// import 'font-awesome/css/font-awesome.min.css';

import { Provider } from 'react-redux';
import store from 'store';

render (<ThemeProvider theme={theme}>
	<BrowserRouter>
		<Provider store={store()}>
			<Switch>
				<Route
					exact
					path="/"
					component={Loadable({
						loader: () => import('routes/ExamplePage'),
						loading: () => <PageLoadingProcess />
					})} />
			</Switch>
		</Provider>
	</BrowserRouter>
</ThemeProvider>, document.getElementById('root'));
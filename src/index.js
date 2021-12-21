import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from '~/pages/Routes';

import './defaults.css';

ReactDOM.render(
	<BrowserRouter forceRefresh>
		<Routes />
	</BrowserRouter>,
	document.getElementById('root')
);

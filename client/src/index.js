import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from '@context/authContext'
import { BrowserRouter } from 'react-router-dom'

// Component Base
import App from './App'
// Styled
import { GlobalStyle } from '@styled/globalStyles'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

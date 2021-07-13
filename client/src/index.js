import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from '@context/authContext'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

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
				<Toaster
					position="bottom-right"
					toastOptions={{
						style: {
							fontSize: '15px',
							lineHeight: '24px'
						}
					}}
				/>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

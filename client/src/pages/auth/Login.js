import { useState } from 'react'

// Core Components
import TextField from '@core/inputs/TextField'

// Styled
import * as s from './Login.styled'

const Login = () => {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = () => {}

	return (
		<s.Login>
			<s.Heading>
				<s.Title>Login</s.Title>
			</s.Heading>
			<s.Form onSubmit={handleSubmit}>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={loading}
				/>
			</s.Form>
		</s.Login>
	)
}

export default Login

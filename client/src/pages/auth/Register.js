import { useState } from 'react'
import { auth } from 'firebase'

// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'

// Styled
import * as s from './Register.styled'

const Register = () => {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		const config = {
			url: process.env.CONFIRMATION_EMAIL_REDIRECT,
			handleCodeInApp: true
		}
		// const result = await auth.sendSignInLinkToEmail(email, config)
		// console.log('result', result)

		window.localStorage.setItem('emailFormRegistration', email)
		setEmail('')
		setLoading(false)
	}

	console.log('path', process.env.CONFIRMATION_EMAIL_REDIRECT)

	return (
		<s.Container>
			<s.Heading>
				<s.Title>Register</s.Title>
			</s.Heading>
			<s.Form onSubmit={handleSubmit}>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={loading}
				/>
				<s.ButtonGroup>
					<Button
						type="submit"
						as="button"
						disabled={!email || loading}>
						Submit
					</Button>
				</s.ButtonGroup>
			</s.Form>
		</s.Container>
	)
}

export default Register

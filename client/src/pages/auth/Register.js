import { useState } from 'react'
import { auth } from '@src/firebase'
import toast from 'react-hot-toast'

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
			url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
			handleCodeInApp: true
		}
		const result = await auth.sendSignInLinkToEmail(email, config)
		console.log('result', result)

		toast.success(`A confirmation was sent to ${email}.`, {
			position: 'top-center',
			icon: '👏',
			ariaProps: {
				role: 'status',
				'aria-live': 'polite'
			}
		})

		window.localStorage.setItem('emailFormRegistration', email)
		setEmail('')
		setLoading(false)
	}

	return (
		<s.Container>
			<s.Heading>
				<s.Title>{loading ? `Loading...` : `Register`}</s.Title>
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

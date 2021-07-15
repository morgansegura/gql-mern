import { useState } from 'react'
import { auth } from '@src/firebase'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

// Layout Components
import AuthForm from '@layouts/forms/AuthForm'

// Styled
import * as s from './Register.styled'

const Register = () => {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

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
		// setEmail('')
		setLoading(false)
		history.push('/')
	}

	return (
		<s.Container>
			<s.Heading>
				<s.Title>{loading ? `Loading...` : `Register`}</s.Title>
			</s.Heading>
			<AuthForm
				email={email}
				loading={loading}
				setEmail={setEmail}
				handleSubmit={handleSubmit}
				showPasswordInput={false}
			/>
		</s.Container>
	)
}

export default Register

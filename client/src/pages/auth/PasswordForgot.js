// Styled
import { useState } from 'react'
import { auth } from '@src/firebase'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-hot-toast'

// Core Components
import Text from '@core/typography/Text'

// Layout Components
import AuthForm from '@layouts/forms/AuthForm'

// Styled
import * as s from './PasswordForgot.styled'

const PasswordForgot = () => {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		const config = {
			url: process.env.REACT_APP_PASSWORD_FORGOT_REDIRECT,
			handleCodeInApp: true
		}

		await auth
			.sendPasswordResetEmail(email, config)
			.then(() => {
				setLoading(false)
				toast.success(`An email was sent to ${email}`)
				setEmail('')

				history.push('/login')
			})
			.catch(error => {
				setLoading(false)
				console.log('error on password forgot email', error)
			})
	}

	return (
		<s.Container>
			<s.Heading>
				<s.Title>
					{loading ? (
						`Loading...`
					) : (
						<Text as="h1">Forgot Password</Text>
					)}
				</s.Title>
				{/* <s.GoogleButton>
					<Button onClick={googleLogin} as="button">
						Login with Google
					</Button>
				</s.GoogleButton> */}
			</s.Heading>
			<AuthForm
				email={email}
				loading={loading}
				setEmail={setEmail}
				handleSubmit={handleSubmit}
			/>
		</s.Container>
	)
}

export default PasswordForgot

import { useState, useContext } from 'react'
import { AuthContext } from '@context/authContext'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { auth, googleAuthProvider } from '@src/firebase'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

// Core Components
import Button from '@core/interaction/Button'

// Layout Components
import AuthForm from '@layouts/forms/AuthForm'

// Styled
import * as s from './Login.styled'

const USER_CREATE = gql`
	mutation userCreate {
		userCreate {
			username
			email
		}
	}
`

const Login = () => {
	const { dispatch } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

	const [userCreate] = useMutation(USER_CREATE)

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		try {
			await auth
				.signInWithEmailAndPassword(email, password)
				.then(async result => {
					const { user } = result
					const idTokenResult = await user.getIdTokenResult()

					dispatch({
						type: 'LOGGED_IN_USER',
						payload: {
							email: user.email,
							token: idTokenResult.token
						}
					})

					// Send user info to MongoDB
					userCreate()

					history.push('/')
				})
		} catch (error) {
			console.log('login error', error)
			toast.error(error.message)
			setLoading(false)
		}
	}

	const googleLogin = () => {
		auth.signInWithPopup(googleAuthProvider).then(async result => {
			const { user } = result
			const idTokenResult = await user.getIdTokenResult()

			dispatch({
				type: 'LOGGED_IN_USER',
				payload: {
					email: user.email,
					token: idTokenResult.token
				}
			})

			// Send user info to MongoDB
			userCreate()
			history.push('/')
		})
	}

	return (
		<s.Container>
			<s.Heading>
				<s.Title>{loading ? `Loading...` : `Login`}</s.Title>
				<s.GoogleButton>
					<Button onClick={googleLogin} as="button">
						Login with Google
					</Button>
				</s.GoogleButton>
			</s.Heading>
			<AuthForm
				email={email}
				password={password}
				loading={loading}
				setEmail={setEmail}
				setPassword={setPassword}
				handleSubmit={handleSubmit}
				showPasswordInput={true}
			/>
		</s.Container>
	)
}

export default Login

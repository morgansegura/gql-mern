import { useState, useContext } from 'react'
import { AuthContext } from '@context/authContext'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { auth, googleAuthProvider } from '@src/firebase'

// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'

// Styled
import * as s from './Login.styled'

const Login = () => {
	const { dispatch } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

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
			history.push('/')
		})
	}

	return (
		<s.Container>
			<s.Heading>
				<s.Title>{loading ? `Loading...` : `Login`}</s.Title>
			</s.Heading>
			<s.GoogleButton>
				<Button onClick={googleLogin} as="button">
					Login with Google
				</Button>
			</s.GoogleButton>
			<s.Form onSubmit={handleSubmit}>
				<s.FormControl>
					<TextField
						label="Email"
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						disabled={loading}
					/>
					<TextField
						label="Password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						disabled={loading}
					/>
				</s.FormControl>
				<s.ButtonGroup>
					<Button
						type="submit"
						as="button"
						disabled={!email || !password || loading}>
						Submit
					</Button>
				</s.ButtonGroup>
			</s.Form>
		</s.Container>
	)
}

export default Login

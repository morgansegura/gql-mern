import { useState, useEffect, useContext } from 'react'
import { auth } from '@src/firebase'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '@context/authContext'

// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'

// Styled
import * as s from './CompleteRegistration.styled'

const CompleteRegistration = () => {
	const { dispatch } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

	useEffect(() => {
		setEmail(window.localStorage.getItem('emailFormRegistration'))
	}, [history])

	const clearInputs = () => {
		setPassword('')
		setLoading(false)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		if (!email || !password) {
			toast.error('Email and password are required!')
			return
		}

		try {
			const result = await auth.signInWithEmailLink(
				email,
				window.location.href
			)
			// console.log('result', result)
			if (result.user.emailVerified) {
				window.localStorage.removeItem('emailFormRegistration')
				let user = auth.currentUser
				await user.updatePassword(password)

				// Dispatch user with token and email, then redirect
				const idTokenResult = await user.getIdTokenResult()
				dispatch({
					type: 'LOGGED_IN_USER',
					payload: { email: user.email, token: idTokenResult.token }
				})

				// make API request save/update user in mongodb

				history.push('/')
			}
		} catch (error) {
			console.log('Registration Completion Error', error.message)
			toast.error(error.message)
			setLoading(false)
			setPassword('')
		}
	}

	return (
		<s.Container>
			<s.Heading>
				<s.Title>
					{loading ? (
						'Loading...'
					) : (
						<div>
							Registration <span>/ Complete the process</span>
						</div>
					)}
				</s.Title>
			</s.Heading>
			<s.Form onSubmit={handleSubmit}>
				<s.FormControl>
					<TextField label={`${email}`} type="email" disabled />
					<TextField
						label="Enter your password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						disabled={loading}
						autoComplete="off"
					/>
				</s.FormControl>
				<s.ButtonGroup>
					{password !== '' && (
						<Button as="span" onClick={clearInputs}>
							Clear
						</Button>
					)}
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

export default CompleteRegistration

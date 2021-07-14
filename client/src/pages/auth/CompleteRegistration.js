import { useState, useEffect, useContext } from 'react'
import { auth } from '@src/firebase'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '@context/authContext'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

// Layout Components
import AuthForm from '@layouts/forms/AuthForm'

// Styled
import * as s from './CompleteRegistration.styled'

const USER_CREATE = gql`
	mutation userCreate {
		userCreate {
			username
			email
		}
	}
`

const CompleteRegistration = () => {
	const { dispatch } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

	useEffect(() => {
		setEmail(window.localStorage.getItem('emailFormRegistration'))
	}, [history])

	const [userCreate] = useMutation(USER_CREATE)

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
				userCreate()
				setPassword('')
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
					{loading ? 'Loading...' : <div>Finish Registration</div>}
				</s.Title>
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

export default CompleteRegistration

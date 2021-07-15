import { useState } from 'react'
import { auth } from '@src/firebase'
import { toast } from 'react-hot-toast'
import { useHistory } from 'react-router-dom'

// Layout Components
import AuthForm from '@layouts/forms/AuthForm'

// Styled
import * as s from './PasswordReset.styled'

const ResetPassword = () => {
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState('')

	let history = useHistory()

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		auth.currentUser
			.updatePassword(password)
			.then(() => {
				setLoading(false)
				setPassword('')
				toast.success('Password successfully updated.')

				history.push('/profile')
			})
			.catch(error => {
				setLoading(false)
				setPassword('')
				toast.error(error.message)
			})
	}

	return (
		<s.Container>
			{' '}
			<s.Heading>
				<s.Title>{loading ? `Loading...` : `Reset Password`}</s.Title>
			</s.Heading>
			<AuthForm
				password={password}
				loading={loading}
				setPassword={setPassword}
				handleSubmit={handleSubmit}
				showPasswordInput={true}
			/>
		</s.Container>
	)
}

export default ResetPassword

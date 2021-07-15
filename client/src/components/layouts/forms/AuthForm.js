import { useState } from 'react'

// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'

// Styled
import { IconVisibilityOn, IconVisibilityOff } from '@icons'

// Styled
import * as s from './AuthForm.styled'

const AuthForm = ({
	email = '',
	password = '',
	loading,
	setEmail,
	setPassword,
	handleSubmit,
	showEmailInput = false,
	showPasswordInput = false,
	disableEmailInput = false,
	disablePasswordInput = false,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const disableButton =
		email === '' || password === '' || loading
			? true
				? password === '' || loading
				: true
				? email === '' || loading
				: true
			: false

	const passwordVisible = showPassword ? 'text' : 'password'

	const handleTogglePasswordVisible = e => {
		e.preventDefault()
		setShowPassword(!showPassword)
	}

	return (
		<s.Form onSubmit={handleSubmit} {...props}>
			<s.FormControl>
				{showEmailInput && (
					<TextField
						label="Email"
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						disabled={loading}
						autoComplete="off"
					/>
				)}
				{showPasswordInput && (
					<s.PasswordContainer>
						<TextField
							label="Password"
							type={passwordVisible}
							value={password}
							onChange={e => setPassword(e.target.value)}
							disabled={loading}
							autoComplete="off"
						/>
						<s.PasswordToggleButton
							as="button"
							onClick={handleTogglePasswordVisible}
							disabled={password === ''}>
							{showPassword ? (
								<IconVisibilityOn />
							) : (
								<IconVisibilityOff />
							)}
						</s.PasswordToggleButton>
					</s.PasswordContainer>
				)}
			</s.FormControl>
			<s.ButtonGroup>
				<Button type="submit" as="button" disabled={disableButton}>
					Submit
				</Button>
			</s.ButtonGroup>
		</s.Form>
	)
}

export default AuthForm

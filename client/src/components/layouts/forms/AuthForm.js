// Core Components
import Button from '@core/interaction/Button'
import TextField from '@core/inputs/TextField'

// Styled
import * as s from './AuthForm.styled'

const AuthForm = ({
	email,
	password = '',
	loading,
	setEmail,
	setPassword,
	handleSubmit,
	showPasswordInput = false,
	disableEmailInput = false,
	disablePasswordInput = false,
	...props
}) => {
	const disableButton = showPasswordInput
		? !email || !password || loading
		: !email || loading

	return (
		<s.Form onSubmit={handleSubmit} {...props}>
			<s.FormControl>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={loading}
					autoComplete="off"
				/>
				{showPasswordInput && (
					<TextField
						label="Password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						disabled={loading}
						autoComplete="off"
					/>
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

import { useState } from 'react'

// Styled
import * as s from './TextField.styled'

const TextField = ({ disabled, label, type, value, ...props }) => {
	const [focused, setFocused] = useState(false)

	return (
		<s.FormGroup data-focused={focused} data-disabled={disabled}>
			<s.Label>{label}</s.Label>
			<s.Input
				type={type}
				value={value}
				onFocus={() => setFocused(true)}
				onBlur={() => (value === '' || !focused) && setFocused(false)}
				disabled={disabled}
				{...props}
			/>
		</s.FormGroup>
	)
}

export default TextField

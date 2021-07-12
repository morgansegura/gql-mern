import { useState } from 'react'

// Styled
import * as s from './TextField.styled'

const TextField = ({ label, type, value, ...props }) => {
	const [focused, setFocused] = useState(false)

	return (
		<s.FormGroup className={focused && `isFocused`}>
			<s.Label>{label}</s.Label>
			<s.Input
				type={type}
				value={value}
				onFocus={() => setFocused(true)}
				onBlur={() => value === '' && setFocused(false)}
				{...props}
			/>
		</s.FormGroup>
	)
}

export default TextField

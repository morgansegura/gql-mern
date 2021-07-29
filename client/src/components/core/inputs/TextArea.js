import { useState, useEffect } from 'react'
import { isEmpty } from '@helpers/utils'

// Styled
import * as s from './TextArea.styled'

const TextArea = ({ disabled, label, type, value, startFocused, ...props }) => {
	let hasValue = !isEmpty(value)
	const [focused, setFocused] = useState(false)

	useEffect(() => {
		setFocused(hasValue)
	}, [hasValue])

	return (
		<s.FormGroup data-id={props.id || type}>
			<s.Label focused={focused} disabled={disabled}>
				{label}
			</s.Label>
			<s.Input
				focused={focused}
				disabled={disabled}
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

export default TextArea

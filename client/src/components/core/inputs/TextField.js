import { useState, useEffect } from 'react'
import { isEmpty } from '@helpers/utils'

// Styled
import * as s from './TextField.styled'

const TextField = ({ disabled, label, type, value, ...props }) => {
	const [focused, setFocused] = useState(false)
	const hasValue = !isEmpty(value)

	return (
		<s.FormGroup data-id={props.id || type}>
			<s.Label focused={focused || hasValue} disabled={disabled}>
				{label}
			</s.Label>
			<s.Input
				focused={focused || hasValue}
				disabled={disabled}
				type={type}
				value={value}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				{...props}
			/>
		</s.FormGroup>
	)
}

export default TextField

import { useState } from 'react'

// Core Components
import Button from '@core/interaction/Button'

// Styled
import * as s from './ImageField.styled'

const ImageField = ({ disabled, type, value, ...props }) => {
	const [focused, setFocused] = useState(value !== '')

	return (
		<s.FormGroup
			data-id={props.id || type}
			data-focused={focused}
			data-disabled={disabled}>
			<s.ButtonGroup>
				<Button type="submit" as="button">
					Upload Images
				</Button>
			</s.ButtonGroup>
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

export default ImageField

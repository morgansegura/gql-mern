import { useEffect, useState } from 'react'

// Core Components
import Text from '@core/typography/Text'
import AnimateSlideToggle from '@core/utils/AnimateSlideToggle'

// Styled
import * as s from './Toast.styled'

const Toast = ({ direction, ...props }) => {
	const [toast, showToast] = useState(false)

	useEffect(() => {
		showToast(true)
		setTimeout(() => {
			showToast(false)
		}, 3000)
	}, [])

	return (
		<s.Toast>
			<AnimateSlideToggle in={toast} direction={direction}>
				<div {...props}>
					<Text>{props.text}</Text>
					<Text>{props.children}</Text>
				</div>
			</AnimateSlideToggle>
		</s.Toast>
	)
}

export default Toast

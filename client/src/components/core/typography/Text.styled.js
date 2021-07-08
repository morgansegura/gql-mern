import styled from 'styled-components'
import { $padding, $margin } from 'styled/variants'
import * as font from 'styled/fonts'

export const Tag = styled(props => props.as)`
	${({ size }) => {
		if (size) {
			return font[`f${size}`]
		}
	}}

	${props => {
		return $padding(props)
	}}

	${props => {
		return $margin(props)
	}}
`

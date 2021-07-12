import styled from 'styled-components'
import { $padding, $margin, $textfill } from '@styled/variants'
import * as font from '@styled/fonts'

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

	${props => {
		if (
			['300', '400', '500', '600', '700', '800', '900'].includes(
				props.weight
			)
		) {
			return `
				font-weight: ${props.weight};
			`
		}
	}}

	${props => {
		return $textfill(props)
	}}

	${props => {
		if (props.italic) {
			return `
				font-style: italic;
			`
		}
	}}
`

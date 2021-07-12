import styled from 'styled-components'
import { $maxWidth } from '@styled/variants/width'
import { $padding, $margin } from '@styled/variants'

export const Container = styled(props => props.as)`
	${({ maxWidth }) => {
		if (maxWidth) return $maxWidth(maxWidth)
	}}

	${props => {
		return $padding(props)
	}}

	${props => {
		return $margin(props)
	}}


	${({ auto }) => {
		if (auto) {
			return `
                margin-left: auto;
                margin-right: auto;
            `
		}
	}}
`

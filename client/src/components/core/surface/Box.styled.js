import styled from 'styled-components'
import {
	$padding,
	$corners,
	$margin,
	$borders,
	$shadow,
	$borderfill,
	$fill
} from 'styled/variants'

export const Box = styled(props => props.as)`
	${props => {
		return $padding(props)
	}}

	${props => {
		return $margin(props)
	}}

	${props => {
		return $corners(props)
	}}

	${props => {
		return $borders(props)
	}}

	${props => {
		return $shadow(props)
	}}

	${props => {
		return $fill(props)
	}}

	${props => {
		return $borderfill(props)
	}}
`

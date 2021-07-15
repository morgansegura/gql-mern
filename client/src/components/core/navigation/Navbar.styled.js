import styled from 'styled-components'
import { minwidth } from '@styled/widths'
import { above, below } from '@styled/utils'
import {
	$padding,
	$margin,
	$corners,
	$borders,
	$shadow,
	$fill,
	$borderfill
} from '@styled/variants'

export const Navbar = styled.div`
	max-width: ${minwidth['max']};
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: 1rem;

	&.isFixed {
		position: fixed;
	}

	${below['tablet']`
    `}

	${above['tablet']`

    `}

	${above['desktop']`

    `}

	${below['max']`
        margin-right: 1rem;
        margin-left: 1rem;
    `}

	${above['max']`
        margin-right: auto;
        margin-left: auto;
    `}

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
		return $shadow(props)
	}}

	${props => {
		return $fill(props)
	}}

	${props => {
		return $borderfill(props)
	}}

	${props => {
		return $borders(props)
	}}
`

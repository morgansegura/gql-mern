import styled from 'styled-components'
import { minwidth } from '@styled/widths'
import { grey } from '@styled/colors'
import { above, below, fontSizing } from '@styled/utils'

export const Login = styled.div`
	background-color: ${grey[200]};
	border-radius: 8px;
	padding: 1rem;
	max-width: ${minwidth['max']};

	${below['max']`
        margin-right: 1rem;
        margin-left: 1rem;
    `}

	${above['max']`
        margin-right: auto;
        margin-left: auto;
    `}
`

export const Form = styled.div`
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`

export const Heading = styled.div``

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${fontSizing('13px', '22px')};
`

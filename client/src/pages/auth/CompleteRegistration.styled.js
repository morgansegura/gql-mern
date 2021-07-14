import styled from 'styled-components'
import { minwidth } from '@styled/widths'
import { grey } from '@styled/colors'
import { above, below, fontSizing } from '@styled/utils'

export const Container = styled.div`
	max-width: ${minwidth['mobile']};

	${below['max']`
        margin-top: 1.5rem;
        margin-right: 1rem;
        margin-left: 1rem;
    `}

	${above['mobile']`
		margin-top: 3rem;
        margin-right: auto;
        margin-left: auto;
    `}

	[data-id='email'] {
		label {
			display: none;
		}
		input {
			cursor: not-allowed;
			pointer-events: none;
			color: ${grey[500]};
			box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
				0px 4px 16px rgba(51, 51, 51, 0.08);
		}
	}
`

export const Heading = styled.div``

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${fontSizing('13px', '22px')}
`

import styled from 'styled-components'
import { minwidth } from '@styled/widths'
import { grey, white } from '@styled/colors'
import { above, below, fontSizing } from '@styled/utils'
import { rem, rgba } from 'polished'

export const Container = styled.div`
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

export const Form = styled.form`
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`

export const Heading = styled.div``

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${fontSizing('13px', '22px')}
`

export const ButtonGroup = styled.div`
	display: flex;
	margin-top: 1.5rem;

	${above['tablet']`
        justify-content: flex-end;
    `}

	button {
		color: ${white};
		border: none;
		border-radius: 4px;
		background-color: #6e41e2;

		${below['tablet']`
            width: 100%;
            padding: ${rem('14px')} ${rem('20px')};
        `}

		${above['tablet']`
            padding: ${rem('10px')} ${rem('40px')};
        `}

		div span {
			background-color: #e3daf9;
		}

		&:hover {
			background-color: #5835b0;
		}

		&:active {
			background-color: #472c8a;
		}

		&:disabled {
			pointer-events: none;
			background-color: ${rgba('#5835b0', 0.15)};
		}
	}
`

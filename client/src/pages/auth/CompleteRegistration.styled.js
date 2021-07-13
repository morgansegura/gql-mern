import styled from 'styled-components'
import { minwidth } from '@styled/widths'
import { grey, white } from '@styled/colors'
import { above, below, fontSizing } from '@styled/utils'
import { rem, rgba } from 'polished'

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
`

export const Form = styled.form`
	margin-top: 0.75rem;
	margin-bottom: 1rem;
`

export const FormControl = styled.div`
	div:not(:last-child) {
		margin-bottom: 1rem;
	}
`

export const Heading = styled.div``

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${fontSizing('13px', '22px')}

	span {
		color: ${grey[600]};
	}
`

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1.5rem;

	${above['mobile']`
        justify-content: flex-end;
    `}

	> span {
		background-color: ${white};
		margin-right: 0.75rem;
		border-radius: 4px;
		align-self: center;
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 16px rgba(51, 51, 51, 0.08);

		${below['tablet']`
            padding: ${rem('8px')} ${rem('16px')};
        `}

		${above['tablet']`
            padding: ${rem('8px')} ${rem('16px')};
        `}

		&:hover {
			box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
				0px 4px 56px rgba(51, 51, 51, 0.16);
		}
	}

	button {
		color: ${white};
		border: none;
		border-radius: 4px;
		background-color: #6e41e2;

		${below['tablet']`
            flex: 1 0 auto;
            padding: ${rem('16px')} ${rem('20px')};
        `}

		${above['tablet']`
            padding: ${rem('14px')} ${rem('24px')};
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

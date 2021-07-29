import styled from 'styled-components'
import { black, grey, white } from '@styled/colors'
import { above, below, fontSizing } from '@styled/utils'
import { rem, rgba } from 'polished'

export const FormGroup = styled.div`
	position: relative;
	z-index: 1;
`

export const Label = styled.label`
	position: absolute;
	top: 50%;
	transform: translate(16px, -50%);
	z-index: 2;
	${fontSizing('15px', '24px')};
	color: ${grey[400]};
	pointer-events: none;
	transition: all 0.3s ease-out;

	[data-focused='true'] & {
		${fontSizing('11px', '20px')};
		top: 6px;
		transform: translate(16px, 0);
	}

	[data-disabled='true'] & {
		color: ${grey[600]};
	}
`

export const Input = styled.input`
	position: absolute;
	z-index: 0;
	width: 100%;
	padding: 1rem;
	background: ${white};
	${fontSizing('15px', '24px')};
	color: ${black};
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
		0px 4px 16px rgba(51, 51, 51, 0.08);
	border-radius: 4px;
	transition: box-shadow 0.3s ease-out;

	&:hover {
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 56px rgba(51, 51, 51, 0.16);
	}

	[data-focused='true'] & {
		padding: 1.125rem 1rem 0.875rem 1rem;
	}

	&:focus {
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 16px rgba(51, 51, 51, 0.08);
	}

	&:disabled {
		cursor: not-allowed;
		background-color: ${grey[100]};
		box-shadow: none;
	}
`

export const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 1rem;

	button {
		color: ${white};
		border: none;
		border-radius: 4px;
		background-color: #6e41e2;
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 16px rgba(51, 51, 51, 0.08);

		${below['tablet']`
            width: 100%;
            padding: ${rem('14px')} ${rem('20px')};
        `}

		${above['tablet']`
			width: 100%;
            padding: ${rem('16px')} ${rem('40px')};
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

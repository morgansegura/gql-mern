import styled from 'styled-components'
import { black, grey, white } from '@styled/colors'
import { fontSizing } from '@styled/utils'

export const FormGroup = styled.div`
	position: relative;
`

export const Label = styled.label`
	position: absolute;
	top: 50%;
	transform: translate(16px, -50%);
	z-index: 1;
	${fontSizing('16px', '24px')};
	color: ${grey[400]};
	pointer-events: none;
	transition: all 0.2s ease-out;

	.isFocused & {
		${fontSizing('13px', '20px')};
		top: 6px;
		transform: translate(16px, 0);
	}
`

export const Input = styled.input`
	z-index: 0;
	width: 100%;
	padding: 1rem;
	background: ${white};
	${fontSizing('16px', '24px')};
	color: ${black};
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
		0px 4px 16px rgba(51, 51, 51, 0.08);
	border-radius: 4px;
	transition: all 0.3s ease-out;

	&:hover {
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 56px rgba(51, 51, 51, 0.16);
	}

	&::focus {
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 16px rgba(51, 51, 51, 0.08);
	}
`

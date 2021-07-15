import styled from 'styled-components'

// Core Components
import Button from '@core/interaction/Button'

import { grey, white } from '@styled/colors'
import { above, below } from '@styled/utils'
import { rem, rgba } from 'polished'

export const Form = styled.form`
	margin-top: 0.75rem;
	margin-bottom: 1rem;
`
export const FormControl = styled.div`
	div:not(:last-child) {
		margin-bottom: 1rem;
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
		flex: 1 0 auto;

		${below['tablet']`
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

export const GoogleButton = styled.div`
	position: absolute;
	right: 0;
`

export const PasswordContainer = styled.div`
	position: relative;
`

export const PasswordToggleButton = styled(Button)`
	position: absolute;
	z-index: 1;
	background-color: transparent;
	top: 50%;
	right: 0.5rem;
	transform: translateY(-50%);
	padding: 0.5rem 0.5rem;
	border-radius: 9999px;
	overflow: hidden;

	div:not(:last-child) {
		display: flex;
		align-items: center;
		margin-bottom: 0;
	}

	div span {
		background-color: ${grey[200]};
	}

	svg g {
		fill: ${grey[200]};
		transition: fill 0.3s ease-out;
	}

	&:hover {
		svg g {
			fill: ${grey[800]};
		}
	}

	&:disabled:hover {
		svg g {
			fill: ${grey[200]};
		}
	}
`

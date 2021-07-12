import styled from 'styled-components'
import { grey } from '@styled/colors'
import { minwidth } from '@styled/widths'
import { above, below } from '@styled/utils'

export const Navbar = styled.div`
	max-width: ${minwidth['max']};
	background-color: ${grey[300]};
	border-radius: 8px;
	/* box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
		0 1px 3px 1px rgb(60 64 67 / 15%); */
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
`

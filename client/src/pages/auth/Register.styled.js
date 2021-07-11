import styled from 'styled-components'
import { minwidth } from 'styled/spacing'
import { above, below } from 'styled/utils'

export const Register = styled.div`
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

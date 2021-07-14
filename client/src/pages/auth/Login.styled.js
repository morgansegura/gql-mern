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
`

export const Heading = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
`

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${fontSizing('13px', '22px')}

	span {
		color: ${grey[600]};
	}
`

export const GoogleButton = styled.div`
	position: absolute;
	right: 0;
`

import styled from 'styled-components'
import { f200, f300 } from '@styled/fonts'
import { grey, white } from '@styled/colors'
import { minwidth } from '@styled/widths'
import { above, below, fontSizing } from '@styled/utils'

export const Home = styled.div``

export const Container = styled.div`
	padding: 1rem;
	background-color: ${grey[200]};
	border-radius: 8px;
	max-width: ${minwidth['max']};

	${below['max']`
        margin-top: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
    `}

	${above['max']`
        margin-top: 1.5rem;
        margin-right: auto;
        margin-left: auto;
    `}
`

export const Heading = styled.div``

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${fontSizing('13px', '22px')};
`

export const PostGrid = styled.div`
	display: grid;
	column-gap: 24px;
	row-gap: 12px;
	margin-top: 1rem;

	${below['tablet']`
        grid-template-columns: repeat(1, 1fr);
    `}

	${above['tablet']`
        grid-template-columns: repeat(2, 1fr);
    `}

	${above['laptop']`
        grid-template-columns: repeat(3, 1fr);
    `}

    ${above['max']`
        grid-template-columns: repeat(4, 1fr);
    `}
`

export const Card = styled.div`
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
		0px 4px 16px rgba(51, 51, 51, 0.08);
	padding: 0.5rem 1rem 1rem 1rem;
	background-color: ${white};
	border-radius: 8px;
`

export const CardTitle = styled.div`
	${f300};
	font-weight: 500;
`

export const CardBody = styled.div`
	${f200};
`

export const Button = styled.div`
	display: flex;
	justify-content: center;
	font-weight: 600;
	margin-top: 2.5rem;
	/* margin-bottom: 4rem; */

	& > div {
		border-radius: 8px;
		text-align: center;
		box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
			0 1px 3px 1px rgb(60 64 67 / 15%);

		${below['tablet']`
            padding: 0.75rem 1.5rem;
        `}

		${above['laptop']`
            padding-top: 1rem;
            padding-bottom: 1rem;
            width: 200px;
        `}
	}
`

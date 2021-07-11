import styled from 'styled-components'
// import { boxshadow } from 'styled/spacing'
import { f200, f300, f400, f600 } from 'styled/fonts'
import { black, grey, white } from 'styled/colors'
import { minwidth } from 'styled/spacing'
import { above, below } from 'styled/utils'

export const Home = styled.div`
	.toast {
		&-loading {
		}

		&-success {
		}

		&-error {
			top: 1rem;
			right: 1rem;
		}
	}
`
export const Container = styled.div`
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

export const Heading = styled.div`
	display: inline-flex;
	border-bottom: 2px solid ${grey[3500]};
	margin-bottom: 1rem;

	${below['tablet']`
		padding-top: 1rem;
	    padding-bottom: 0.5rem;
    `}

	${above['tablet']`
		padding-top: 1.5rem;
        padding-bottom: 0;
    `}
`

export const Title = styled.div`
	font-weight: 600;
	color: ${black};

	${above['tablet']`
        ${f300};
    `}

	${above['laptop']`
        ${f400};
    `}

    ${above['max']`
        ${f600};
    `};
`

export const PostGrid = styled.div`
	display: grid;
	column-gap: 24px;
	row-gap: 12px;

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
	box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
		0 1px 3px 1px rgb(60 64 67 / 15%);
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
	margin-bottom: 4rem;

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

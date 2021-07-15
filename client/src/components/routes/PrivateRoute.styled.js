import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { minwidth } from '@styled/widths'
import { black, grey } from '@styled/colors'
import { above, below, fontSizing } from '@styled/utils'

export const Nav = styled.nav`
	${below['laptop']`
        display: flex;
        margin-top: -0.5rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid ${grey[200]};
        order: 0;
    `}

	${above['laptop']`
    	padding: 0.5rem 2rem;
        margin-left: 2rem;
        border-left: 1px solid ${grey[300]};
        order: 1;
    `}
`

export const NavInner = styled.div`
	${below['laptop']`
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-bottom: 0.65rem;
        width: 99%;
    `}
`

export const NavMenu = styled.div`
	${below['laptop']`
        display: flex;
        min-width: 100%;
    `}
`

export const NavItem = styled.div`
	${below['laptop']`
        margin-right: 0.5rem;
    `}
`

export const NavItemLink = styled(NavLink)`
	${fontSizing('14px', '32px')};

	${below['laptop']`
    	${fontSizing('12px', '24px')};
        	color: ${grey[500]};
        border: 1px solid ${grey[200]};
        padding: 0.125rem 0.5rem;
        border-radius: 9999px;
        display: inline;
    `}

	color: ${grey[400]};
	transition: all 0.3s ease-out;

	&:hover {
		color: ${grey[800]};
	}

	&.is-active {
		${below['laptop']`
            background-color: ${grey[200]};
            padding: 0.125rem 0.5rem;
            border-radius: 9999px;
        `}
		color: ${black};

		&:hover {
			color: ${black};
		}
	}
`

export const Container = styled.div`
	display: flex;
	max-width: ${minwidth['max']};

	${below['laptop']`
        flex-direction: column;
    `}

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
export const Content = styled.div`
	margin-left: 0.5rem;
	flex: 1 0 auto;
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

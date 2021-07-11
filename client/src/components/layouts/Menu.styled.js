import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { f100 } from 'styled/fonts'

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
`

export const Logo = styled.div``

export const Menu = styled.div`
	flex: 1 0 auto;
	display: flex;
	justify-content: flex-end;
`

export const MenuItemRouter = styled(Link)`
	${f100};
	font-weight: 500;
	text-transform: uppercase;
	padding-left: 1rem;
	transition: opacity 0.3s ease-out;

	&::not(:last-child) {
		padding-right: 1rem;
	}

	&:hover {
		opacity: 0.65;
	}
`

export const MenuItemHref = styled.a`
	${f100};
	font-weight: 500;
	text-transform: uppercase;
	padding-left: 1rem;
	transition: opacity 0.3s ease-out;

	&::not(:last-child) {
		padding-right: 1rem;
	}

	&:hover {
		opacity: 0.65;
	}
`

export const MenuItem = styled.div`
	${f100};
	cursor: pointer;
	font-weight: 500;
	text-transform: uppercase;
	padding-left: 1rem;
	transition: opacity 0.3s ease-out;

	&::not(:last-child) {
		padding-right: 1rem;
	}

	&:hover {
		opacity: 0.65;
	}
`

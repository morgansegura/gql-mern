import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { Link } from 'react-router-dom'
import { white } from '@styled/colors'
import { fontSizing } from '@styled/utils'

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

const menuItems = css`
	cursor: pointer;
	${fontSizing('12px', '22px')};
	font-weight: 600;
	text-transform: uppercase;
	padding: ${rem('4px')} ${rem('10px')};
	transition: all 0.3s ease-out;

	&:not(:last-child) {
		margin-right: 0.5rem;
	}

	&:hover {
		opacity: 0.65;
	}

	&[data-user='true']:last-child {
		background-color: ${white};
		border-radius: 4px;
	}
`

export const MenuItemRouter = styled(Link)`
	${menuItems}
`

export const MenuItemHref = styled.a`
	${menuItems}
`

export const MenuItem = styled.div`
	${menuItems}
`

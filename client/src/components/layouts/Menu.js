import { Fragment } from 'react'
import * as s from './Menu.styled'

const Menu = ({ children, ...props }) => {
	return (
		<s.Nav>
			<s.Logo>{props.logo && props.logo}</s.Logo>
			<s.Menu>
				{props.navItems &&
					props.navItems.map(({ id, label, path, type, ...rest }) => (
						<Fragment key={id}>
							{type === 'router' ? (
								<s.MenuItemRouter to={path} {...rest}>
									{label}
								</s.MenuItemRouter>
							) : type === 'href' ? (
								<s.MenuItemHref href={path} {...rest}>
									{label}
								</s.MenuItemHref>
							) : (
								<s.MenuItem onClick={path} {...rest}>
									{label}
								</s.MenuItem>
							)}
						</Fragment>
					))}
			</s.Menu>
			{children}
		</s.Nav>
	)
}
export default Menu

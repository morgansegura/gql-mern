import { Fragment } from 'react'
import * as s from './Menu.styled'

const RouteType = ({ type, path, label, ...props }) => {
	let linkType

	switch (type) {
		case 'router':
			linkType = (
				<s.MenuItemRouter to={path} {...props}>
					{label}
				</s.MenuItemRouter>
			)
			break
		case 'href':
			linkType = (
				<s.MenuItemHref href={path} {...props}>
					{label}
				</s.MenuItemHref>
			)
			break
		default:
			linkType = (
				<s.MenuItem onClick={path} {...props}>
					{label}
				</s.MenuItem>
			)
			break
	}
	return linkType
}

const Menu = ({ ...props }) => {
	return (
		<s.Nav>
			<s.Logo>{props.logo && props.logo}</s.Logo>
			<s.Menu>
				{props?.navItems?.map(({ id, ...rest }) => (
					<RouteType key={id} {...rest} />
				))}
				{props?.authNavItems?.map(({ id, user, ...rest }) => (
					<Fragment key={id}>
						{user && (
							<RouteType key={id} data-user={true} {...rest} />
						)}
					</Fragment>
				))}
			</s.Menu>
		</s.Nav>
	)
}
export default Menu

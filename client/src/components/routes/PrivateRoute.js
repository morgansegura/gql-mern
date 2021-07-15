import { useState, useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '@context/authContext'

// Core Components
import ScrollArea from '@core/interaction/ScrollArea'

// Styled
import * as s from './PrivateRoute.styled'

const PrivateRoute = ({ ...props }) => {
	const { state } = useContext(AuthContext)
	const [user, setUser] = useState(false)

	useEffect(() => {
		if (state.user) {
			setUser(true)
		}
	}, [state.user])

	const navLinks = () => (
		<s.Nav>
			<ScrollArea>
				<s.NavInner>
					<s.NavMenu>
						<s.NavItem>
							<s.NavItemLink
								to="/profile"
								activeClassName="is-active">
								Profile
							</s.NavItemLink>
						</s.NavItem>
						<s.NavItem>
							<s.NavItemLink
								to="/password/reset"
								activeClassName="is-active">
								Password
							</s.NavItemLink>
						</s.NavItem>
						<s.NavItem>
							<s.NavItemLink
								to="/create/post"
								activeClassName="is-active">
								New Post
							</s.NavItemLink>
						</s.NavItem>
					</s.NavMenu>
				</s.NavInner>
			</ScrollArea>
		</s.Nav>
	)

	const renderContent = () => (
		<s.Container>
			{navLinks()}
			<s.Content>
				<Route {...props} />
			</s.Content>
		</s.Container>
	)

	return user ? renderContent() : <h4>Loading...</h4>
}

export default PrivateRoute

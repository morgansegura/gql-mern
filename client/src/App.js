import { useContext } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '@src/firebase'
import { AuthContext } from '@context/authContext'

// Layout Components
import Navbar from '@core/navigation/Navbar'

// Layout Components
import Menu from '@layouts/Menu'

// Page Components
import Home from '@pages/Home'
import Post from '@src/pages/post/Post'

// Auth Page Components
import Login from '@pages/auth/Login'
import Register from '@pages/auth/Register'
import CompleteRegistration from '@pages/auth/CompleteRegistration'
import PasswordReset from '@pages/auth/PasswordReset'
import PasswordForgot from '@pages/auth/PasswordForgot'
import Profile from '@pages/auth/Profile'

// Route Components
import PrivateRoute from '@routes/PrivateRoute'

const Logo = () => {
	return <div>Logo</div>
}

const App = () => {
	const client = new ApolloClient({
		uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
		request: operation => {
			operation.setContext({
				headers: {
					authtoken: user ? user.token : ''
				}
			})
		}
	})

	const { state, dispatch } = useContext(AuthContext)
	let history = useHistory()

	const { user } = state

	const logout = () => {
		auth.signOut()

		dispatch({
			type: 'LOGGED_IN_USER',
			payload: null
		})
		history.push('/login')
	}

	const navItems = [
		{
			id: 1,
			path: '/',
			label: 'Home',
			type: 'router'
		}
	]

	const authNavItems = [
		{
			id: 2,
			path: '/login',
			label: 'Login',
			type: 'router',
			user: !user
		},
		{
			id: 3,
			path: '/register',
			label: 'Register',
			type: 'router',
			user: !user
		},
		{
			id: 4,
			path: logout,
			label: 'Logout',
			type: 'function',
			user: user
		},
		{
			id: 5,
			path: '/profile',
			label: 'Profile',
			type: 'router',
			user: user
		}
	]

	return (
		<ApolloProvider client={client}>
			<Navbar fill="teal" radius="lg">
				<Menu
					logo={<Logo />}
					navItems={navItems}
					authNavItems={authNavItems}
				/>
			</Navbar>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route
					exact
					path="/complete-registration"
					component={CompleteRegistration}
				/>
				<Route
					exact
					path="/password/forgot"
					component={PasswordForgot}
				/>
				<PrivateRoute
					exact
					path="/password/reset"
					component={PasswordReset}
				/>
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/post/create" component={Post} />
			</Switch>
		</ApolloProvider>
	)
}

export default App

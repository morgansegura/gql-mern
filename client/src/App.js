import { useContext } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '@src/firebase'
import { AuthContext } from '@context/authContext'

// Layout Components
import Navbar from '@layouts/Navbar'
import Menu from '@layouts/Menu'

// Page Components
import Home from '@pages/Home'
import Login from '@pages/auth/Login'
import Register from '@pages/auth/Register'
import CompleteRegistration from '@pages/auth/CompleteRegistration'

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
		}
	]

	return (
		<ApolloProvider client={client}>
			<Navbar>
				<Menu
					logo={<Logo />}
					navItems={navItems}
					authNavItems={authNavItems}
				/>
			</Navbar>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route
					path="/complete-registration"
					component={CompleteRegistration}
				/>
			</Switch>
		</ApolloProvider>
	)
}

export default App

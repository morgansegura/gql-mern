import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route } from 'react-router-dom'

// Layout Components
import Navbar from '@layouts/Navbar'
import Menu from '@layouts/Menu'

// Page Components
import Home from '@pages/Home'
import Login from '@pages/auth/Login'
import Register from '@pages/auth/Register'

const client = new ApolloClient({
	uri: process.env.GRAPHQL_ENDPOINT
})

const Logo = () => {
	return <div>Logo</div>
}

const App = () => {
	const navItems = [
		{
			id: 1,
			path: '/',
			label: 'Home',
			type: 'router'
		},
		{
			id: 2,
			path: '/login',
			label: 'Login',
			type: 'router'
		},
		{
			id: 3,
			path: '/register',
			label: 'Register',
			type: 'router'
		}
	]

	return (
		<ApolloProvider client={client}>
			<Navbar>
				<Menu logo={<Logo />} navItems={navItems} />
			</Navbar>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</Switch>
		</ApolloProvider>
	)
}

export default App

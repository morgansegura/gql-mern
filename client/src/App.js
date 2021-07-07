import { useState } from 'react'
import ApolloClient, { gql } from 'apollo-boost'
// Core Components
import Text from 'components/core/typography/Text'
import Box from 'components/core/surface/Box'

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
})

const App = () => {
	const [posts, setPosts] = useState([])

	client
		.query({
			query: gql`
				{
					allPosts {
						id
						title
						description
					}
				}
			`
		})
		.then(result => setPosts(result.data.allPosts))

	return (
		<div>
			{posts.map(({ id, title, description }) => (
				<Box key={id}>
					<Text as="h3" pb="4" size="400">
						{title}
					</Text>
					<Text as="h4" size="200">
						{description}
					</Text>
				</Box>
			))}
		</div>
	)
}

export default App

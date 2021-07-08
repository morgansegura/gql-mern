import { useState } from 'react'
import ApolloClient, { gql } from 'apollo-boost'
// Core Components
import Text from 'components/core/typography/Text'
import Box from 'components/core/surface/Box'
import Container from 'components/core/structure/Container'
import Grid from 'components/core/structure/Grid'
import AnimateSlideToggle from 'components/core/utils/AnimateSlideToggle'

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
})

const App = () => {
	const [showPosts, setShowPosts] = useState(false)
	const [posts, setPosts] = useState([])

	const fadeToggle = () => {
		setShowPosts(!showPosts)
	}

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
		<Container maxWidth="xs" my="32" auto>
			<Text onClick={fadeToggle} pb="24">
				Click to load
			</Text>
			<AnimateSlideToggle in={showPosts} direction="right">
				<Grid cols={`${posts.length}`} gap="16">
					{posts.map(({ id, title, description }) => (
						<Box
							key={id}
							shadow="md"
							radius="sm"
							pt="8"
							px="16"
							pb="16"
							border
							borderfill="#efefef">
							<Text as="h3" size="400">
								{title}
							</Text>

							<Text as="h4" size="200">
								{description}
							</Text>
						</Box>
					))}
				</Grid>
			</AnimateSlideToggle>
		</Container>
	)
}

export default App

import { useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { AuthContext } from 'context/authContext'
import { useHistory } from 'react-router-dom'

// Core Components
import Toast from 'components/core/interaction/Toast'
import Button from 'components/core/interaction/Button'

// Styled
import * as s from './Home.styled'

// GraphQL
const GET_ALL_POSTS = gql`
	{
		allPosts {
			id
			title
			description
		}
	}
`
const Home = () => {
	const { data, loading, error } = useQuery(GET_ALL_POSTS)

	const { state, dispatch } = useContext(AuthContext)

	let history = useHistory()

	if (loading)
		return <Toast text="Loading..." className="toast toast-error" />

	if (error) return <Toast text={error} className="toast toast-error" />

	return (
		<s.Home>
			<s.Container>
				<s.Heading>
					<s.Title>GraphQL Posts</s.Title>
				</s.Heading>

				<s.PostGrid>
					{data.allPosts.map(({ id, title, description }) => (
						<s.Card key={id}>
							<s.CardTitle>{title}</s.CardTitle>

							<s.CardBody>{description}</s.CardBody>
						</s.Card>
					))}
				</s.PostGrid>
				{JSON.stringify(history)}
				<s.Button>
					<Button dark>Load More</Button>
				</s.Button>
			</s.Container>
		</s.Home>
	)
}

export default Home

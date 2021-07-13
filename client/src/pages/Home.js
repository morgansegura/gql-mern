import { useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { AuthContext } from '@context/authContext'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

// Core Components
import Button from '@core/interaction/Button'

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

	const updateUserName = () => {
		dispatch({
			type: 'LOGGED_IN_USER',
			payload: 'morgansegura@gmail.com'
		})
	}

	// if (loading) {
	// 	toast.loading('Loading...')
	// }

	// if (error) {
	// 	toast.error(error.message)
	// }

	return (
		<s.Home>
			<s.Container>
				<s.Heading>
					<s.Title>GraphQL Posts</s.Title>
				</s.Heading>

				<s.PostGrid>
					{data.allPosts &&
						data.allPosts.map(({ id, title, description }) => (
							<s.Card key={id}>
								<s.CardTitle>{title}</s.CardTitle>

								<s.CardBody>{description}</s.CardBody>
							</s.Card>
						))}
				</s.PostGrid>
				{/* {JSON.stringify(state)} */}
				<s.Button>
					<Button>Load More</Button>
				</s.Button>
			</s.Container>
		</s.Home>
	)
}

export default Home

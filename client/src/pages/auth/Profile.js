import { useState, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { useQuery, useMutation } from '@apollo/react-hooks'
import omitDeep from 'omit-deep'
import { PROFILE } from '@graphql/queries'
import { USER_UPDATE } from '@graphql/mutations'

// Core Components
import Button from '@core/interaction/Button'
import Text from '@core/typography/Text'
import TextField from '@core/inputs/TextField'
import TextArea from '@core/inputs/TextArea'
import ImageField from '@core/inputs/ImageField'

// Styled
import * as s from './Profile.styled'

const Profile = () => {
	const [values, setValues] = useState({
		username: '',
		name: '',
		email: '',
		about: '',
		images: []
	})
	const [loading, setLoading] = useState(false)

	const { data } = useQuery(PROFILE)

	useMemo(() => {
		if (data) {
			setValues({
				// ...values,
				username: data.profile.username,
				name: data.profile.name,
				email: data.profile.email,
				about: data.profile.about,
				images: omitDeep(data.profile.images, ['__typename'])
			})
		}
	}, [data])

	const [userUpdate] = useMutation(USER_UPDATE, {
		update: ({ data }) => {
			console.log('USER UPDATE MUTATION IN PROFILE', data)
			toast.success('Profile Saved')
		}
	})

	const { name, username, email, about } = values

	const disableButton = false

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		userUpdate({ variables: { input: values } })
		setLoading(false)
	}

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const handleImageChange = () => {}

	const profileUpdateForm = () => (
		<s.Form onSubmit={handleSubmit}>
			<TextField
				type="text"
				label="Username"
				name="username"
				value={username}
				onChange={handleChange}
				disabled={loading}
			/>
			<TextField
				type="text"
				label="Name"
				name="name"
				value={name}
				onChange={handleChange}
				disabled={loading}
			/>
			<TextField
				type="email"
				label="Email"
				name="email"
				value={email}
				onChange={handleChange}
				disabled={loading}
			/>
			<ImageField
				type="file"
				accept="image/*"
				label="Image"
				name="image"
				// value={image}
				onChange={handleImageChange}
				disabled={loading}
			/>
			<TextArea
				label="About"
				name="about"
				value={about}
				onChange={handleChange}
				disabled={loading}
			/>
			<s.ButtonGroup>
				<Button type="submit" as="button" disabled={disableButton}>
					Submit
				</Button>
			</s.ButtonGroup>
		</s.Form>
	)

	return (
		<s.Container>
			<s.Heading>
				<s.Title>
					<Text as="h2">Your Profile</Text>
				</s.Title>
			</s.Heading>
			{profileUpdateForm()}
		</s.Container>
	)
}

export default Profile

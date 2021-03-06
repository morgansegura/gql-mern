const { gql } = require('apollo-server-express')

module.exports = gql`
	scalar DateTime

	type Query {
		me: String!
	}

	type Image {
		url: String
		public_id: String
	}

	type User {
		_id: ID!
		username: String
		name: String
		email: String
		images: [Image]
		about: String
		createdAt: DateTime
		updatedAt: DateTime
	}

	type UserCreateResponse {
		username: String!
		email: String!
	}

	input ImageInput {
		url: String
		public_id: String
	}

	input UserUpdateInput {
		username: String
		email: String!
		name: String
		images: [ImageInput]
		about: String
	}

	type Query {
		profile: User!
	}

	type Mutation {
		userCreate: UserCreateResponse!
		userUpdate(input: UserUpdateInput): User!
	}
`

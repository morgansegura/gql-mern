const { gql } = require('apollo-server-express')
const { posts } = require('../temp.js')

const totalPosts = () => posts.length
const allPosts = () => posts

// mutations
const newPost = (parent, args) => {
	const { title, description } = args.input

	const post = {
		id: posts.length + 1,
		...args.input,
	}
	// push new post obj to posts array
	posts.push(post)
	return post
}

module.exports = {
	Query: {
		totalPosts,
		allPosts,
	},
	Mutation: {
		newPost,
	},
}

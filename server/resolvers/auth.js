const { gql } = require('apollo-server-express')

const me = () => 'Morgan'

module.exports = {
	Query: {
		me,
	},
}

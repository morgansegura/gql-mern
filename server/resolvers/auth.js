const { gql } = require('apollo-server-express')
const { authCheck } = require('../helpers/auth')

const me = async (parent, args, { req }) => {
	await authCheck(req)
	return 'Morgan'
}

module.exports = {
	Query: {
		me
	}
}

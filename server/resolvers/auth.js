const shortid = require('shortid')
const { authCheck } = require('../helpers/auth')
const User = require('../models/user')

const me = async (parent, args, { req }) => {
	await authCheck(req)
	return 'Morgan'
}

const userCreate = async (parent, args, { req }) => {
	const currentUser = await authCheck(req)
	const user = await User.findOne({ email: currentUser.email })
	return user
		? user
		: new User({
				email: currentUser.email,
				username: shortid.generate()
		  }).save()
}

const userUpdate = async (parent, args, { req }) => {
	const currentUser = await authCheck(req)
	const updatedUser = await User.findOneAndUpdate(
		{ email: currentUser.email },
		{ ...args.input },
		{ new: true }
	).exec()

	return updatedUser
}

module.exports = {
	Query: {
		me
	},
	Mutation: {
		userCreate,
		userUpdate
	}
}

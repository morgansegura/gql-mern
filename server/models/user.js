const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			index: true
		},
		name: {
			type: String
		},
		email: {
			type: String,
			required: true,
			index: true
		},
		images: {
			type: Array,
			default: {
				url: 'https://via.placeholder.com/200x200.png?text=Profile',
				public_id: '123'
			}
		},
		about: {
			type: string
		}
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', userSchema)

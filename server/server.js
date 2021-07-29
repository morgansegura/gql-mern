const express = require('express')
const http = require('http')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')
const mongoose = require('mongoose')
const { authCheckMiddleware } = require('./helpers/auth')
const cors = require('cors')
const cloudinary = require('cloudinary')

require('dotenv').config()

// Express Server
const app = express()

// DB
const db = async () => {
	try {
		const success = await mongoose.connect(process.env.DB_LOCAL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
		console.log('DB Connected')
	} catch (error) {
		console.log('DB connection error', error)
	}
}

// Execute DB Connection
db()

// Types Query / Mutation / Subscription
const typeDefs = mergeTypeDefs(
	loadFilesSync(path.join(__dirname, './typeDefs'))
)

// Resolvers
const resolvers = mergeResolvers(
	loadFilesSync(path.join(__dirname, './resolvers'))
)

// Graphql Server

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req, res }) => ({ req, res })
})

// Apply Middleware method connects ApolloServer to a specific HTTP framework ie: express
apolloServer.applyMiddleware({
	app
})

// Server
const httpserver = http.createServer(app)

// Rest Endpoint
app.get('/rest', authCheckMiddleware, (req, res) => {
	res.json({
		data: 'You hit the rest endpoint.'
	})
})

// Cloudinary Config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_PIK_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
})

// Upload
app.post('/uploadimages', authCheckMiddleware, (req, res) => {
	cloudinary.uploader.upload(
		req.body.image,
		result => {
			res.send({
				url: result.url,
				public_id: result.public_uid
			})
		},
		{
			public_id: `${Date.now()}`, // public name
			resource_type: 'auto' // JPG, JPEG, PNG
		}
	)
})

// Remove Image
app.post('/removeimage', authCheckMiddleware, (req, res) => {
	let image_id = req.body.public_id

	cloudinary.uploader.destroy(image_id, (error, result) => {
		if (error) return res.json({ success: false, error })
		res.send('ok')
	})
})

// Port
app.listen(process.env.PORT, () => {
	console.log(`Server is listening at http://localhost:${process.env.PORT}`)
	console.log(
		`GraphQL server is listening at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
	)
})

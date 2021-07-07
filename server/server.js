const express = require('express')
const http = require('http')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')
const mongoose = require('mongoose')
require('dotenv').config()

// Express server
const app = express()

// db
const db = async () => {
	try {
		const success = await mongoose.connect(process.env.DB_LOCAL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		console.log('DB Connected')
	} catch (error) {
		console.log('DB connection error', error)
	}
}

// execute db connection
db()

// types query / mutation / subscription
const typeDefs = mergeTypeDefs(
	loadFilesSync(path.join(__dirname, './typeDefs'))
)

// resolvers
const resolvers = mergeResolvers(
	loadFilesSync(path.join(__dirname, './resolvers'))
)

// graphql server

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
})

// Rest endpoint
app.get('/rest', (req, res) => {
	res.json({
		data: 'You hit the rest endpoint.',
	})
})

// apply Middleware method connects ApolloServer to a specific HTTP framework ie: express
apolloServer.applyMiddleware({
	app,
})

// Server
const httpserver = http.createServer(app)

// Port
app.listen(process.env.PORT, () => {
	console.log(`Server is listening at http://localhost:${process.env.PORT}`)
	console.log(
		`GraphQL server is listening at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
	)
})

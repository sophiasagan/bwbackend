const express = require("express")
const bodyParser = require('body-parser')
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")
const sleepRouter = require("./sleep/sleep-router")
const appRouter = require("./app/app-router")

const server = express()
//const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

// parse serverlication/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse serverlication/json
server.use(bodyParser.json())

// server.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

server.use(cors())

server.use("/auth", authRouter)
server.use("/users", usersRouter)
server.use("/sleep", sleepRouter)
server.use("/app", appRouter)

server.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
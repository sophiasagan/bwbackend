# SleepTracker

* [Deployment](#deployment)

This is the backend documentation for Sleep Tracker Build Week Project

* [Auth](#auth)
  + [Login](#login)
  + [Register](#register)

* [Users](#users)
  + [Delete User](#delete-user)
  + [Get User](#get-user)
  + [Get Users](#get-users)
  + [Update User](#update-user)

* [Sleep](#sleep)
  + [Get Sleep Log](#get-sleep-log)
  + [Get Sleep Log by ID](#get-sleep-log-by-id)
  + [Delete Sleep Log](#delete-sleep-log)
  + [Create Sleep Log](#create-sleep-log)
  + [Update Sleep Log](#update-sleep-log)
 

# Deployment <a name="deployment"></a>

* [Backend Deployment](https://sleeptracker4.herokuapp.com/)

# Auth

## Register

<p>Register new User.</p>

	POST auth/register

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User's username</p>							|
| password			| String			|  <p>User's password</p>							|
| firstname			| String			|  <p>User's first name</p>							|
| lastname			| String			|  <p>Users's last name</p>							|

### Success Response

Response

``` 
{
  "id": 1,
  "username": "joedoe"
}

```

### Error Message

``` 
{
  "error": "Every Field Must Be Entered"
}
```

## Login

<p>Login existing User.  Returns the web token.</p>

	POST auth/login

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User's username</p>							|
| password			| String			|  <p>User's password</p>							|

### Success Response

Response

``` 
{
  "message": "Welcome joedoe",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiam9lZG9lIiwiaWF0IjoxNTkwMDE3MTQ1LCJleHAiOjE1OTAwMjQzNDV9.cgZzopb7bC9SN7ewzyQ-h1n-gnbFaxS4nxpc780L5kk"
}
```

### Error Response

``` 
{
  "message": "Invalid username or password"
}
```

# Users

<p>Existing user endpoints</p>

``` 
| Table     | Method | Endpoint                          | Description                                                                                                       
------------------------------------------------------------------------------------------------------------------
| users     | PUT    | /users/:id                        | Updates `user` profile using the information
|           |        |               (WIP)               | sent inside the `body` of the request and returns a
|           |        |                                   | message along. |
|           |        |                                   |    
------------------------------------------------------------------------------------------------------------------
| users     | DEL    | /users/:id                        | Deletes a single `user` object. |
|           |        |                                   | 
|           |        |                                   | 
|           |        |                                   |  
------------------------------------------------------------------------------------------------------------------
| users     | GET    | /users                            | Retrieves an array of `user` objects and returns a
|           |        |                                   | message with the array in the `body` of the response. |
------------------------------------------------------------------------------------------------------------------
| users     | GET    | /users/:id                        | Retrieves a single `user` object and returns a
|           |        |                                   | message with the object inside the `body` of the 
|           |        |                                   | response. |   
-----------------------------------------------------------------------------------------------------------------                                                         

```

## Get User

  GET /users

### Success Response

Response

``` 
[
  {
    "id": 2,
    "username": "jandoe"
  },
  {
    "id": 1,
    "username": "joedoe"
  },
  {
    "id": 4,
    "username": "jondoe"
  }
]
```

### Error Response

``` 
{
  "message": "Invalid username or password"
}
```

## Get Users

  GET /users/:id

### Success Response

Response

``` 
{
  "id": 1,
  "username": "joedoe"
}
```

### Error Response

``` 
{
  "message": "User Not Found."
}
```

## Delete User

  DEL /users/:id

### Success Response

Response

``` 
{
  "message": "1 record deleted."
}
```

### Error Response

``` 
{
  "message": "User Not Found."
}
```

## Update User

  PUT /users/:id (endpoint not available -- work in progress)

# Sleep

<p>Existing user `sleep` endpoints</p>

``` 
| Table     | Method | Endpoint                          | Description                                                                                                       
------------------------------------------------------------------------------------------------------------------
| sleep     | PUT    | /sleep/:id                        | Updates `sleep` log using the information
|           |        |                                   | sent inside the `body` of the request and returns a
|           |        |                                   | message along. |
|           |        |                                   |    
------------------------------------------------------------------------------------------------------------------
| sleep     | DEL    | /sleep/:id                        | Deletes a single `sleep` log. |
|           |        |                                   | 
------------------------------------------------------------------------------------------------------------------
| sleep     | POST   | /sleep                            | Creates `sleep` log using the information sent inside
|           |        |                                   | the `body` of the request.|
------------------------------------------------------------------------------------------------------------------
| sleep     | GET    | /sleep/:id                        | Retrieves an array of user's `sleep` logs and returns a
|           |        |                                   | message with the array in the `body` of the response. |
------------------------------------------------------------------------------------------------------------------
| sleep     | GET    | /sleep/:id/logs                   | Retrieves an array of user's `sleep` logs returns a
|           |        |                                   | message with the object inside the `body` of the 
|           |        |                                   | response without any of the user's profile information. |   
-----------------------------------------------------------------------------------------------------------------                                                         

```

## Get Sleep Log

  GET /sleep/:id

### Success Response

Response

``` 
{
  "id": 1,
  "username": "joedoe",
  "data": [
    {
      "id": 1,
      "date": "2020-04-21",
      "sleepStart": "2020-04-21 21:15:00.000",
      "sleepEnd": "2020-04-22 07:15:00.000",
      "duration": 10,
      "moodBeforeSleep": 1,
      "moodAfterSleep": 3,
      "sleepScore": 7,
      "user_id": 1
    },
    {
      "id": 2,
      "date": "2020-04-22",
      "sleepStart": "2020-04-22 021:15:00.000",
      "sleepEnd": "2020-04-23 07:15:00",
      "duration": 10,
      "moodBeforeSleep": 4,
      "moodAfterSleep": 4,
      "sleepScore": 5.5,
      "user_id": 1
    },
    {
      "id": 3,
      "date": "2020-04-21",
      "sleepStart": "2020-04-21 21:15:00.000",
      "sleepEnd": "2020-04-22 07:15:00.000",
      "duration": 10,
      "moodBeforeSleep": 2,
      "moodAfterSleep": 2,
      "sleepScore": null,
      "user_id": 1
    }
  ]
}
```

### Error Response

``` 
{
  "message": "invalid credentials"
}
```

## Get Sleep Log by Id

  GET /sleep/:id/logs

### Success Response

Response

``` 
[
  {
    "id": 1,
    "date": "2020-04-21",
    "sleepStart": "2020-04-21 21:15:00.000",
    "sleepEnd": "2020-04-22 07:15:00.000",
    "duration": 10,
    "moodBeforeSleep": 1,
    "moodAfterSleep": 3,
    "sleepScore": 7,
    "user_id": 1
  },
  {
    "id": 2,
    "date": "2020-04-22",
    "sleepStart": "2020-04-22 021:15:00.000",
    "sleepEnd": "2020-04-23 07:15:00",
    "duration": 10,
    "moodBeforeSleep": 4,
    "moodAfterSleep": 4,
    "sleepScore": 5.5,
    "user_id": 1
  },
  {
    "id": 3,
    "date": "2020-04-21",
    "sleepStart": "2020-04-21 21:15:00.000",
    "sleepEnd": "2020-04-22 07:15:00.000",
    "duration": 10,
    "moodBeforeSleep": 2,
    "moodAfterSleep": 2,
    "sleepScore": null,
    "user_id": 1
  }
]
```

### Error Response

``` 
{
  "message": "invalid credentials"
}
```

## Delete Sleep Log

  DEL /sleep/:id

### Success Response

Response

``` 
{
  "message": "data deleted"
}
```

### Error Response

``` 
{
  "message": "invalid credentials"
}
```

## Update Sleep Log

  PUT /sleep/:id 

### Success Response

Response

``` 
1

```

### Error Response

``` 
{
  "message": "invalid credentials"
}
```

## Create Sleep Log

  POST /sleep

### Success Response

Response

``` 
[]

```

### Error Response

``` 
{
  "message": "invalid credentials"
}
```

## Built With

---

* [Node.js](https://en.wikipedia.org/wiki/Node.js) - JavaScript runtime for executing JavaScript at the server outside the browser
* [Express.js](https://expressjs.com/) - Lightweight web framework to bootstrap Node.js APIs
* [SQLite3](https://www.sqlite.org/index.html) - Super lightweight database to bootstrap development environments
* [PostgreSQL](https://www.postgresql.org/) - An advanced object-relational database for production environments
* [Knex.js](https://knexjs.org/) - A SQL query builder that helps abstracting migrations and DDLs for different database types into a single coherent structure
* [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - A module to help make passwords more secure
* [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
* [Helmet](https://www.npmjs.com/package/helmet) - A collection of 14 smaller middleware functions that set HTTP response headers
* [JWT](https://jwt.io/) - JSON Web Token for authorization and client side tokens for security
* [Supertest](https://www.npmjs.com/package/supertest) - A test module for HTTP assertions
* [Jest](https://jestjs.io/) - A simple JavaScript testing framework
* [Dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env

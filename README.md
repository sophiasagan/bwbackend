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
  + [Sleep Start](#sleep-start)
  + [Sleep End](#sleep-end)

* [Duration](#duration)
  + [Get Duration](#get-duration)
  + [Update Duration](#update-duration)

* [Mood](#mood)
  + [Delete User](#delete-user)
  + [Get User](#get-user)

* [Score](#score)
  + [Get Users](#get-users)
  + [Update User](#update-user)
    - [Sleep Start] (#sleep-start)
    - [Sleep End] (#sleep-end)
    - sleep

    /duration
    /weekly
    /monthly average
    -mood before and after (0 - 3)
    -score for sleep (1-4/)

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




## Built With

---

- [Node.js](https://en.wikipedia.org/wiki/Node.js) - JavaScript runtime for executing JavaScript at the server outside the browser
- [Express.js](https://expressjs.com/) - Lightweight web framework to bootstrap Node.js APIs
- [SQLite3](https://www.sqlite.org/index.html) - Super lightweight database to bootstrap development environments
- [PostgreSQL](https://www.postgresql.org/) - An advanced object-relational database for production environments
- [Knex.js](https://knexjs.org/) - A SQL query builder that helps abstracting migrations and DDLs for different database types into a single coherent structure
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - A module to help make passwords more secure
- [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- [Helmet](https://www.npmjs.com/package/helmet) - A collection of 14 smaller middleware functions that set HTTP response headers
- [JWT](https://jwt.io/) - JSON Web Token for authorization and client side tokens for security
- [Supertest](https://www.npmjs.com/package/supertest) - A test module for HTTP assertions
- [Jest](https://jestjs.io/) - A simple JavaScript testing framework
- [Dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env

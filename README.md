# SleepTracker

This is the backend documentation for Sleep Tracker Build Week Project

- [Auth](#auth)
	- [Login](#login)
	- [Register](#register)

- [Users](#users)
	- [Delete User](#delete-user)
	- [Get User](#get-user)
	- [Get Users](#get-users)
	- [Update User](#update-user)



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


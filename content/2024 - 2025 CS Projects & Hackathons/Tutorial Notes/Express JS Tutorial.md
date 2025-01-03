Web Dev Simplified
### Setup
Set up basic ``package.js`` file: ``npm init -y``
Install express library: ``npm i express``
Install nodemon ``npm i --save-dev nodemon``
- Save as dev dependency
- Allows us to easily restart server whenever we make changes
Create new script in "scripts" inside ``package.json``: type ``"devStart": "nodemon server.js"``
- Run all code in server.js, and automatically rerun after each update 
To start, run: ``npm run devStart``
##### ``server.js`` file:
```js
const express = require("express") // require express library
const app = express() // set up server by creating app variable that calls express function

app.listen(3000); // make server run, our server is listening on port 3000 for requests

// localhost:3000 will display "Cannot GET /" meaning the root index route "/" cannot be found (as we havent set it up yet)
```

### Basic Routing

Get request (retrieve data from server): ``app.get(path, function(req,res,next) => {run following code when we try to access this url})``

##### ``server.js`` file:
```js
app.get('/.', (req, res) => {
	console.log("Hello World");
	res.send("hi"); // send string to user when they use get method
	res.sendStatus(500); // send status code: 500 = internal server error
	res.status(500).send("hi"); // send down string, and report error
	res.status(500).json({message: "Error"}); // send down json code, and report error
	res.json({message: "Error"}); // status is sucess (200) by default
	res.download("server.js"); // send file for user to download
})
```

### Rendering HTML
By default, all rendering files go inside folder named ``views``. Create folder named ``views``, and put ``index.html`` inside it.
Then, must use view engine to render it or else error.
Install EJS view engine: ``npm i ejs``
Use view engine: ``app.set("view engine", "ejs")`` and rename HTML to ``index.ejs``
To get syntax, install "EJS language support extension"

Run server side logic code in EJS: ``<%= 2+2 %>`` (which will return and display 4).
- ``<% code %>`` means running the code inside server
- `` = `` means displaying that code to the webpage
Pass in information from ``server.js`` to ``index.ejs``: ``res..render("index", {text:"World"})``

##### ``server.js`` file:

```js
const express = require("express") 
const app = express()

app.set("view engine", "ejs")

app.get("/", (req,res) => {
	res.render("index", {text: "World"}) // renders html, pass in text variable
})

app.listen(3000)
```

##### ``index.ejs`` file:

```Embedded-Javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello World
    <%= 2+2 %>
    <%= text %> <!-- pass in text variable from server.js-->
</body>
</html>
```

The variable must be defined as the same name in both ``server.js`` and ``index.ejs``. If variable is not found, we can write ``<%= text || 'variable not found' %>`` to adjust for the error.

### Routers
Used to organize routes.
Create another instance of ``app = express()`` in a separate file, and link it to ``server.js`` file.
Create folder called ``routes``.
Create new file inside folder ``user.js`` which contains a router.
Create a router: ``const router = express.Router();`` 
- Works as an independent "mini" application different from the main application ``app`` inside ``server.js``. 
- Purpose is to nest it inside a parent route (can set all routes in this router as ``users/...`` in the beginning)

Must:
- Export router in ``user.js``: ``module.exports = router``
- Must import router in ``server.js``: ``const userRouter = require("./routes/users")`` (which is the path of the file containing the router)
- Link a route to a path (link this router to the path beginning with ``users/...)``: ``app.use("/users",userRouter)``

##### ``server.js`` file:

```js
const express = require("express") 
const app = express()

app.set("view engine", "ejs")

app.get("/", (req,res) => {
	res.render("index", {text: "World"}); // renders html, pass in text variable
})
const userRouter = require("./routes/users");
app.use("/users",userRouter);
app.listen(3000);
```

##### ``users.js`` file:
```js
const express = require("express")
const router = express.Router();
router.get("/", (req,res) => {
	res.send("User List")
})

router.get("/new", (req,res) => {
	res.send("User New Form")
})

module.exports = router
```


### Advanced Routing

Post request (create new user): ``router.post('/', (req,res) ={<code>})``

Dynamic routing (access user based on a param): 
- Starts with a colon
- Get request for any ``users`` route with something after it
- Parameter for route is ``userId``
```js
router.get("/:userId", (req,res) => {
	res.send(`Current route is user/${req.params.userId}`) // pulled from url
})
```
Note: In Express JS, code runs from top to bottom. ==Thus, we put all our specific route requests before our dynamic routes==. Otherwise, it will read the dynamic route first and run that code instead of running our static (specific) route code.

We can chain requests that have the same route for better organization:
- Using ``.route()`` method
```js
router
	.route("/:userId")
	.get("/:userId", (req,res) => {
		res.send(`Get User with ID ${req.params.userId}`) 
	})
	.put("/:userId", (req,res) => {
		res.send(`Update User with ID ${req.params.userId}`)
	})
	.delete("/:userId", (req,res) => {
		res.send(`Delete User with ID ${req.params.userId}`) 
	})

// above is same as below

router.get("/:userId", (req,res) => {
	res.send(`Get User with ID ${req.params.userId}`) 
})
router.put("/:userId", (req,res) => {
	res.send(`Update User with ID ${req.params.userId}`)
})
router.delete("/:userId", (req,res) => {
	res.send(`Delete User with ID ${req.params.userId}`) 
})
```

Run function based on param:
- Run function any time we goes to a route that has the given parameter
- A type of middleware 
- In this case, we run the code whenever we have ``userId`` parameter
- Put ``next()`` to continue with the rest of our code  (so the page doesn't load infinitely)
```js
router.param("userId", (req,res,next,id) => {
	console.log(id)
	next() // run the next express js middleware/request
})
```
All together (get user name from id in middleware, then send it inside the get function)
 ```js
 router
	.route("/:userId")
	.get({req,res} => {
		console.log(req.user) // access user after middleware
	})

const users = [{name: "User 1"}, {name:"User 2"}]
router.param("userId", (req,res,next,id) => { // anytime we have an id
	req.user = users[id] // set req.user to the user with that id in the users array
	next() // continue with code
})
```

### Middleware
Code that runs between start and end of a request.
Every middleware takes in ``req,res,next``.
Use middleware: ``app.use(<middleware name>)`` 
Middleware (like everything), works from top to bottom. Thus, we have to place ``app.use(<middleware name>)`` on top of requests that uses this middleware, and nothing else. Any requests above this use call will not be affected.
```js
app.use(logger)

...

function logger(req, res, next){
	console.log(req.originalUrl); // print url this request comes from
	next()
}
```
- We may also do this inside specific routes (such as only in ``users.js`` file): ``router.use(logger)``

We can make middleware work on a specific request (let ``function1`` and ``function2`` middleware work for the get request):
```js
app,get("/", function1, function2, (req,res) => {
	res.render("index", {text: "World"});
})
```


### Rendering Static Files
Rendering a static file (never change)
- Built in middleware
Create folder ``public`` and put in the static files we are going to render (For ex: ``index.html``).
Render all files in ``public`` folder: ``app.use(express.static("public"))``


### Parsing Form/JSON/Query-Param Data

**Parsing Form Data:**
Create ``users`` folder inside ``views`` folder, then create ``new.ejs`` inside ``users`` folder. 
After processing the GET request for route ``/new``, lets render ``users/new.ejs``, so
```js
router.get("/new", (req, res) => {
	res.render("users/new");
})
```
Create a form in ``new.ejs``, where the action is making a POST request to ``users`` route:
##### ``new.ejs`` file:
```Embedded-Javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "/user" method="POST">
        <label>First Name
            <input type="text" name="firstName" value="<%= locals.firstName %>" />
        </label>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

We may access information of form after submit by POST request:
- Use middleware (express doesn't allow access of forms body directly inside request functions): ``app.use(express.urlencoded({extended: true})``
- Use the ``urlencoded()`` middleware to access information from forms. Also set ``extended:true`` boilerplate or else warning. 
##### ``server.js`` file:
```js
app.use(express.urlencoded({extended:true})) // middleware for allowing us to get form body (user submission)
```
##### ``users.js`` file:
```js

router.post("/", (req,res) => {
	console.log(req.body.firstName) // req.body.firstName to get form body
	const isValid = true; // is request valid?
	if (isValid){
		users.push({firstName req.body.firstName}); // push this user to the 'users' array below
		res.redirect(`/users/${users.length-1}`) // redirects url to the page of the user we just created
	}
	else{
		console.log("Error")
		res.render("users/new", {firstName: req.body.firstName}) // redirects back to forms page, while keeping previous information since we passed it down by {firstName: req.body.firstName} (previously entered firstName)
	}
})
```

**Parse JSON Data:**
Must use middleware ``app.use(express.json())``
- Same as ``urlencoded`` but for JSON
Everything else is the same essentially, since we just wrote express code so there is no difference between Form and JSON except the middleware.

**Parse Query Params:**
Dealing with ``?name = "..."`` routes (query links).
Use ``req.query.<what we passed in as query>``
```js
router.get("/", (req,res) => {
	console.log(req.query.name);
})
```



### What is React
JavaScript library used for building UI.
Uses Components Model: A piece of UI that has it's own appearance and logic.

### Set Up
Go to folder terminal and do
```
npm create vite@latest
asks for proceed -> type 'y'
type project name 
Selection framework: 'React'
Select variant: 'Javascript'

Go into project folder 'cd'
type 'npm install' to install all packages for react
```

### File and Folder Structure
**node_modules:** contains modules and packages that react depends on. All 3rd party packages will also go here.
**public:** stores assets file such as html, images, etc that are not modified by JS.
**src:** main frontend code
- All asset files that need to be accessed by JS go in **assets** folder
- Contains most frontend JS code
**.gitignore:** ignore files when pushing to github (or else get 10k+ commit error)
 **eslint.config.js:** configuration file for eslint (tool that helps fix JS issues)
 **index.html:** 
 **package.json:** contains metadata for project such as name, versions, dependencies
 **package-lock.json:** Locks dependency versions ( ensures every installation of the project from an outside source uses the same version of dependencies)
 **README.md:** info about project
**vite.config.js:** configuration for vite 

### Components
Independent and reusable JS functions that can return HTML.
Allows us to separate/split the website into smaller 'components', so we can work on navbar, sections, etc, separately.
We store all our components in the **components** folder.

Install "ES7+ React/Redux/React-Native snippets" Extension for component shortcuts.

**Creating Component:**
Some rules:
- First letter of component name is upper case.
- Component must return some JSX (such as HTML).
Essentially a JavaScript function
```jsx
function App() {
  return <section>Hello World</section>
}
```

Must render component to UI so we can use it in other parts of project:
```jsx
export default App;
```

To use a component from another file, we import it at the top, then reference it when we need it (for example in main.jsx):
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // get root in index.html
	/* call component */
  <StrictMode>
    <App /> 
  </StrictMode>,
)

```

Type: ``npm run dev`` in terminal to run frontend.

### What is JSX
JavaScript XML: allows us to write HTML in React JS files. A component that returns HTML-like syntax (though not exactly HTML code, but similar). For example: we must write "className" instead of "class" since it's JS (to see this, go to https://babeljs.io/ and convert HTML to JS code and it will work the same, but JS code looks tedious). Thus, JSX makes it so that HTML code is easy to write in JS.

**Rules:** 
- One component can only return one parent: so only return one ``<div>`` or ``<section>`` as a parent for everything. But inside the div we can have any amount of nested divs, etc.
- Must close all tags such as ``<img />`` or ``<div/>``. 
- Must use JSX version (in camelCase) of HTML-like code
	- Must use ``className`` instead of ``class``. 
	- Muse use ``htmlFor`` instead of ``for``.
	- Error is usually ``Invalid DOM property '...'. Did you mean '...'?``.

### Expressions

In JSX, we can write dynamic JavaScript expressions inside **curly braces**. Expressions can be React variables, properties, or any valid JS expression. 
Example 1:
```jsx
function App(){
	const name = "nosa";
	const mult = (a,b) => a*b;
	const myClass = "my-class";
	const product = {
		name: "Laptop",
		price: 1500,
		availability: "In Stock",
		
	}
	return(
		<div>	
			<h1>{name}</h1>
			<p>{2+2}</p> // returns 4
			<p>2*2 = {mult(2,2)}</p> // returns 2*2 = 4
			<p>Friends List: {["nosa1,nosa2,nosa3"]}</p>
			<p className={myClass}>Hello World</p>
			<div>
				<h1>Name: {product.name}</h1>
				<h1>Price: {product}</h1>
				<h1>Availability: {product.avilability}</h1> 
			</div>
		</div>
	) 
}
```


### Lists
Render lists with a loop, using JavaScript ``map()`` array method. 

```jsx
function App(){

  const usersInfo = [
    {
      username: "user1",
      email: "user1@gmail.com"
    },
    {
      username: "user2",
      email: "user2@gmail.com"
    },
    {
      username: "user3",
      email: "user3@gmail.com"
    }
  ]
  const products = [
    {id: 1, name: "Phone", price: 699},
    {id: 2, name: "Laptop", price: 1200},
    {id: 3, name: "Headphones", price: 199},
  ]
  const numbers = [1,2,3,4,5];

  return (
    <main>
      {numbers.map((number) => ( 
        <ul key = {Math.random()}> {/* must use unique label for each variable*/}
          <li>{number}</li> {/* curly braces for js variable */}
        </ul>
      ))}

      {usersInfo.map((user) => ( 
        <ul key = {Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
        </ul>
      ))}

      {/* can also destruct the values separately, make sure to put curly braces */}
      {usersInfo.map(({id, name, price}) => ( 
        <div key = {id}>
          <h1>Name: {name}</h1>
          <h1>Price: ${price}</h1>
        </div>
      ))}
    </main>
  )
}

export default App;
```

### Props
Arguments passed into react components. Allows us to pass data from parent to child component. Passed in via HTML attributes.
```jsx
function App(){
  { /* pass variable 'name', 'age', 'hobbies' to child component */}

  return ( 
    <User 
      img="https://i.pinimg.com/736x/61/24/f2/6124f203430984848ac82f117684d8e1.jpg"
      name = 'user' 
      age ={18}  
      hobbies={['Coding', 'Sleeping']} 
    /> 
  )
}

function User(props){
  console.log(props); // prints " name: 'user' "

  return( 
    <div>
      <img src={props.img} alt={props.name} />
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Hobbies: {props.hobbies}</h1>
    </div>
  )
}
export default App;
```

### Conditional Rendering
Display UI components based on specific conditions (dynamic). 

```jsx

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Valid Password</h1>;

const Password = ({isValid}) => {
  // check which component to render based on given prop (condition)
  if (isValid){ // renders this since isValid = true
    return <ValidPassword />
  }
  else{
    return <InvalidPassword/>
  }

  // can also use ternary: return isValid ? <ValidPassword/> : <InvalidPassword/>;
}

const Cart = () => {
  const iterms = [];
  return (
    <div>
      <h1>Cart</h1>
      {/* if length > 0, return the h2 */}
      {iterms.length > 0 && <h2>You have {iterms.length} items in your Cart</h2>}
      <ul>
        <h4>Products</h4>
        {iterms.map(item => (
          <li key={Math.random()}>{item}</li>
        ))
        }
      </ul>
    </div>
  )
}

function App(){
  { /* pass conditions (bool) into prop*/}
  return(
    <div>
      <Password isValid={true} /> 
      <Cart/>
    </div>
  )
  
}

export default App;
```


### Styling
**Inline Style:** Must use double curly braces with style, then just type CSS-like code. Usually two word properties do not have spaces and is in camel case (For ex: in CSS we write ``background-color``, in React we write ``backgroundColor``).
We may also put styles in a separate object (in which case we only need single curly braces cause we already have a curly brace in the object.
```jsx
function App(){
  const styles = {
    color: "white", 
    backgroundColor: "teal", 
    padding: "2rem"
  };

  return(
    <div>
      <h1 style={{color: "red", background: "blue"}}>Hello World</h1>
      <h1 style={styles}>Inline Style</h1>
      
    </div>
  )
}

export default App;
```

**Reference CSS:** Or we can just reference CSS file
```jsx
import "./index.css";
```

**Using Icons:** type ``npm install react-icons --save`` in terminal to import icons library. Then, go to https://react-icons.github.io/react-icons/ to search for icons.
First import on top. Then, reference component when needed
```jsx
import { GiCat } from "react-icons/gi";

function App(){
  return(
    <div>
      <GiCat />
    </div>
  )
}

export default App;
```


### Events
Add events such as "onClick".
```jsx
const Button = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random() * 10));
    console.log("you clicked me");
  }
  return <button onClick={handleClick}>Click</button>
}

const Copy = () => {
  const copyHandler = () => {
    console.log("text copied");
  }
  return (
    <p onCopy={copyHandler}> {/* can pass in functions to events*/}
      Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Et temporibus non perferendis 
      numquam voluptatum cupiditate eaque culpa accusantium, 
      ex, dignissimos cumque delectus excepturi nam odio dolor 
      qui, dicta itaque aliquid.
    </p>
  )
}

const Move = () => {

  function moveHandler(){
    alert("Mouse move event fired");
    console.log("Move move event fired");
  }
  return(
    <p onMouseMove={moveHandler}> {/* when mouse hovering over text */}
      Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Maiores, veniam nemo 
      eos vel mollitia consectetur iste perferendis! 
      Saepe quo error deleniti repudiandae commodi eaque 
      voluptatem vero quia labore, qui eligendi.
    </p>
  )
}

function App(){
  return(
    <div>
      <Button />
      <Copy />
      <Move />
    </div>
  )
}

export default App;
```


### States and Hooks
**State:** a way to store/manage data that can change over time (dynamic data). Define state using ``useState``, which sets the initial value and provides a way to update values.
**Hook:** a way to use state and other React features without writing a class based component.
**useState()**: Hook that allows us to track state in a functional component. We must import it from react.
```jsx
import { useState } from "react";
...
const [data, setData] = useState()
```
The data itself, and a function that can change the data.

Without using useState method, we cannot change the state/value of the data variable. This is because if we just do something like ``data += 1`` normally, data will change but the component will not re-render so it won't show up on the UI. Changing value through the setData function tells the component to re-render and thus return the updated value of data.

```jsx
import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
function App(){
  // update value
  const [count, setCount] = useState(0); // 0 = initial value
  
  const increment = () => setCount(count+1); // function to increment count
  const decrement = () => setCount(count-1);

  // update array
  const [users, setUsers] = useState(["user1", "user2"]);

  const addOneUser = () => setUsers([...users, "user1"]); // perserve previous friends using "...friends", then add a new friend "user3"
  const removeUser = () => setUsers(users.filter(f => f !== 'user1')); // remove user1 by filtering out "user1" from the rest of the array
  const updateOneUser = () => {
    setUsers(users.map(f => f == 'user1' ? 'user4' : f)); // ternary operator: if friend == 'user1, change to 'user4'. Else don't change.
  }

  // update object
  const [movies, setMovie] = useState([
    {id: 1, title: "movie1",rating: 7},
    {id: 2, title: "movie2",rating: 3},
    {id: 3, title: "movie3",rating: 5}
  ]);

  // share to other component


  const changeName = () => {
    setMovie(movies.map(m => m.id == 1 ? {...m, title:"movie3"} : m)); // for each movie object, we change movie only if its id is 1.
  }

  const changeRating = () => {
    setMovie(
      movies.map((m) =>
        m.id === 2 ? { ...m, rating: 5 } : m // Create a new object for the updated movie
      )
    );
  };

  


  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    
      {users.map((f) => (
        <li key = {Math.random()}>{f}</li>
      ))}

      <button onClick={addOneUser}>Add One User</button>
      <button onClick={removeUser}>Remove One User</button>
      <button onClick={updateOneUser}>Update One User</button>
      
      {movies.map(m => (
        <li key={m.id}>Title: {m.title}, Rating: {m.rating}</li>
      ))}

      <button onClick={changeName}>Change Name</button>
      <button onClick={changeRating}>Change Rating</button>
    </div>
  )
}


export default App;
```


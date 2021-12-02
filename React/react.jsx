// React and JS
/**
 * Debido a que JSX es una extensión sintáctica de JavaScript, en realidad puede escribir JavaScript directamente dentro de JSX. Para hacer esto, simplemente incluya el código que desea que se trate como JavaScript entre llaves: {'esto se trata como código JavaScript'}. 
 * Debido a que JSX no es JavaScript válido, el código JSX debe compilarse en JavaScript. El transpilador Babel es una herramienta popular para este proceso.
 */

// React in FreeCodeCamp
/**
 * Vale la pena señalar que, bajo el capó, los desafíos hacen llamar a ReactDOM.render (JSX, document.getElementById ('root')). Esta llamada de función es lo que coloca su JSX en la propia representación ligera del DOM de React. React luego usa instantáneas de su propio DOM para optimizar la actualización solo de partes específicas del DOM real.
 */



// Definitions
/**
 * A stateless functional component is any function you write which accepts props and returns JSX
 * A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state 
 * You may see stateful components referred to simply as components or React components, referred to simply as components or React components.
 */

// Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;



// Create a Complex JSX Element
// When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required
//  If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in 
const JSX = (
<div> 
  <h1>Hola!</h1>
  <p>Mi lista de compra</p>
  <ul>
    <li>Jamon</li>
    <li>Huevos</li>
    <li>Frijol</li>
  </ul>
</div>
);

// Invalid JSX
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>



// Add Comments in JSX
{/**To put comments inside JSX, you use the syntax, to wrap around the comment text. */}



// Render HTML Elements to the DOM
// Syntax: ReactDOM.render(componentToRender, targetNode)
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))



// Define an HTML Class in JSX
// One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.
// In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is onClick, instead of onclick. 
const JSX = <div className="myDiv">
</div>;



// Learn About Self-Closing JSX Tags
// any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. 
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);



// Create a Stateless Functional Component
// To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter.
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};



// Create a React Component
// The other way to define a React component is with the ES6 class syntax. 
// It is best practice to call a component's constructor with super, and pass props to both. 
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}


const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};



// Create a Component with Composition
// To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. 
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
          <ChildComponent/>

        { /* Change code above this line */ }
      </div>
    );
  }
};



// Use React to Render Nested Components
// You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit/>
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits/>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// Compose React Components
// Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
          <NonCitrus/>
          <Citrus/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits/>
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};



// Render a Class Component to the DOM
// ReactDOM.render(componentToRender, targetNode)
// ReactDOM.render(<ComponentToRender />, targetNode)
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          ReactDOM.render(<Fruits/>, document.getElementById('challenge-node'))
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
          ReactDOM.render(<Vegetables/>, document.getElementById('challenge-node'))



// Write a React Component from Scratch
// Remember, a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null. This is the basic form of a React component. 
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>
        My First React Component!
        </h1>
      </div>
    )
  }
}
ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))



// Pass Props to a Stateless Functional Component
// you can pass props, or properties, to child components
// You can pass Welcome a user property by writing:
<App>
  <Welcome user='Mark' />
</App>
// Since Welcome is a stateless functional component, it has access to this value like so:
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
// You can access the value of the argument in the function body. With class components, you will see this is a little different.
// Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// Pass an Array as Props
/**
 * To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
 */
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>

/**
 * Array methods such as join() can be used when accessing the property
 */
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
// produce: <p>green, blue, red</p> 

const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={['a','b']}/>
        <h2>Tomorrow</h2>
        <List tasks={['1','2','3']}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// Use Default Props
/**
 *  You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary
 * This allows you to specify what a prop value should be if no value is explicitly provided.
 * React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
 */
MyComponent.defaultProps = { location: 'San Francisco' }

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {items: 0}



// Override Default Props
/**
 * The way to override the default props is to explicitly set the prop values for a component.
 * Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes
 * However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. This syntax tells JSX to interpret the value within the braces directly as JavaScript.
 */
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};



// Use PropTypes to Define the Props You Expect
/**
 * It's considered a best practice to set propTypes when you know the type of a prop ahead of time. 
 * You can define a propTypes property for a component in the same way you defined defaultProps
 * function and boolean (written as bool) are the only two that use unusual spelling. 
 * you can check that a prop is a React element. Please refer to the https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-typefor all of the options.
 *  As of React v15.5.0, PropTypes is imported independently from React, like this: 
 */
import PropTypes from 'prop-types';

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }


const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {quantity: PropTypes.number.isRequired}
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};



// Access Props Using this.props
/**
 * Anytime you refer to a class component within itself, you use the this keyword.
 * To access props within a class component, you preface the code that you use to access it with this
 */
{this.props.data}

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line */ }
            <ReturnTempPassword tempPassword="passdeale"/>
          { /* Change code above this line */ }
        </div>
    );
  }
};



// Review Using Props with Stateless Functional Components
/**
 * A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.
 * A stateless functional component is any function you write which accepts props and returns JSX.
 */
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) => {
  return (
    <p>{props.name}</p>
  )
}
Camper.propTypes = {name: PropTypes.string.isRequired}
Camper.defaultProps = {name:'CamperBot'}



// Create a Stateful Component
/**
 * State consists of any data your application needs to know about, that can change over time. 
 * You create state in a React component by declaring a state property on the component class in its constructor.
 * This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:
 */
this.state = {
}
/**
 * Note that you must create a class component by extending React.Component in order to create state like this.
 */
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
      this.state = {
        name: 'Ale'
      }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


// Render State in the User Interface
/**
 * If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.
 * If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.
 * React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary.
 * if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};


// Render State in the User Interface Another Way
/**
 * In the render() method, before the return statement, you can write JavaScript directly. 
 * you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.
 * you don't have to enclose this reference in curly braces.
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};



// Set State with this.setState
/**
 * You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs
 * If we were storing a username in state and wanted to update it, it would look like this:
 */
this.setState({
  username: 'Lewis'
});
/**
 * React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous
 * There is an alternative syntax for the setState method which provides a way around this problem. https://facebook.github.io/react/docs/state-and-lifecycle.html
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
      this.setState({
        name: 'React Rocks!'
      })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};



// Bind 'this' to a Class Method
/**
 *  A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. 
 * One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized.  Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
      this.handleClick = this.handleClick.bind(this)
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};



// Use State to Toggle an Element
/**
 * you can't rely on the previous value of this.state or this.props
 * you should not use code like this:
*/
this.setState({
  counter: this.state.counter + this.props.increment
});
/**
 * you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. 
 */
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
/**You can also use a form without props if you need only the state: 
 * you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.
*/
this.setState(state => ({
  counter: state.counter + 1
}));

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
      toggleVisibility() {
        this.setState(state => ({
          visibility: !state.visibility
        }));
        console.log(this.state.visibility)
      }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

/**other way */

 // change code below this line
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }
  // change code above this line
  


  // Write a Simple Counter

  class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
    // Change code above this line
  }
  // Change code below this line
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
    reset() {
      this.setState(state => ({
        count: 0
      }))
    }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};



// Create a Controlled Input
/**
 * With React, you can move this mutable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.
 */

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
      this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};



// Create a Controlled Form
/**
 *  This applies to other form elements as well, including the regular HTML form element.
 */

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    {/* preventDefault the submit form  */}
    event.preventDefault();
    this.setState({
      submit: this.state.input
    })
      
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input value={this.state.input} onChange={this.handleChange}/>
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}



// Pass State as Props to Child Components
/**
 * A common pattern is to have a stateful component containing the state important to your app, that then renders child components. You want these components to have access to some pieces of that state, which are passed in as props.
 * The first is unidirectional data flow. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need.
 * The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles. 
 */

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line */}
    </div>
    );
  }
};



// 
/**
 * You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components.
 * You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under this.props in the child component.
 * this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components. */ 

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};



// Use the Lifecycle Method 
// componentWillMount
/**
 * have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time.
 * This can be before they are rendered, before they update, before they receive props, before they unmount, and so on
 * times: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()
 * Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. (Source)
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('The coolest code')
    // Change code above this line
  }
  render() {
    return <div />
  }
};

//componentDidMount
/**
 * The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component.
 * When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}



// Add Event Listeners
/**
 * The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality
 * React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.
 * It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};



// Optimize Re-Renders with shouldComponentUpdate
/**
 * So far, if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
 * This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.
 */
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 === 0) {
      return true;
    } 
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}



// Introducing Inline Styles
/**
 *  it won't be exactly the same as working with HTML because of the way you apply classes to JSX elements.
 * If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the className attribute, and apply styles to the class in your stylesheet.
 * React will not accept kebab-case keys in the style object.
 * You can optionally set the font size to be a number, omitting the units px
 */
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>



// Add Inline Styles in React
/**
 * Other than the length values that default to px, all other property values should be wrapped in quotes.
 * If you want to use em, for example, you wrap the value and the units in quotes, like  
 * If you have a large set of styles, you can assign a style object to a constant to keep your code organized.
 * As a rule, any hyphenated style properties are written using camel case in JSX.*/
{fontSize: "4em"}

const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple'
}
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};



// Use Advanced JavaScript in React Render Method
/**
 * You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces.
 * When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.
 */
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
          {answer}
          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}


// Render with an If-Else Condition
/**
 *  Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view.
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this); 
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if(!this.state.display) {
      return <div>
                   <button onClick={this.toggleDisplay}>Toggle Display</button>
                  </div>
    } else {
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
    }  
  }
};  



// Use && for a More Concise Conditional
/**
 * If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return false after evaluating the condition and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing && after each one
 * This allows you to handle more complex conditional logic in your render() method without repeating a lot of code.
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};



// Use a Ternary Expression for Conditional Rendering
/**
 * if/else statements can't be inserted directly into JSX code
 * Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX.
 */
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: '',
      userAge: ''
    }
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
          {
            this.state.userAge === ''
            ? buttonOne
            : this.state.userAge < 18
              ? buttonTwo
              : buttonThree
          } 
        {/* Change code above this line */}
      </div>
    );
  }
}



// Render Conditionally from Props
/**
 * Developers use the value of a given prop to automatically make decisions about what to render.
 */
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression}/>
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}


// Change Inline CSS Conditionally Based on Component State
/**
 *  To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method.
 * This paradigm is important to understand because it is a dramatic shift from the more traditional approach of applying styles by modifying DOM elements directly
 * In that approach, you must keep track of when elements change and also handle the actual manipulation directly.
 * When you set a style object based on a condition, you describe how the UI should look as a function of the application's state.
 *  There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React.
 */
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ 
      input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
      if(this.state.input.length > 15) {
      inputStyle = {
        border: "3px solid red"
      }
    }
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};



// Use Array.map() to Dynamically Render Elements
/**
 * Programmers need to write their code to correctly handle that unknown state ahead of time. Using Array.map() in React illustrates this concept.
 * You may know that all sibling child elements created by a mapping operation like this do need to be supplied with a unique key attribute.
 */
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(function(item) {
      return <li>{item}</li>
    }); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}



// Give Sibling Elements a Unique Key Attribute
/**
 *  When you create an array of elements, each one needs a key attribute set to a unique value. 
 * React uses these keys to keep track of which items are added, changed, or removed
 * Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.
 * Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.
 */
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(function(framework) {
    return <li key={framework}>{framework}</li>
  }); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};



// Use Array.filter() to Dynamically Filter an Array
/**
 *  filters the contents of an array based on a condition, then returns a new array.
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // Change this line
    console.log(usersOnline)
    const renderOnline = usersOnline.map(function(user) {
      return <li key={user.username}>{user.username}</li>
    }) // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}



// Render React on the Server with renderToString
/**
 *  rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server
 * Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible
 * React provides a renderToString() method you can use for this purpose.
 * First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. 
 * Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
 * The renderToString() method is provided on ReactDOMServer
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App/>)
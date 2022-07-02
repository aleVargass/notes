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





// Complex JSX Element
// JSX elements written as siblings with no parent wrapper element will not transpile
// Valid JSX, parentheses not necessary
const JSX2 = (
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
{/*     <p></p>
        <p></p>    */}





// Add Comments in JSX
{/* */}





// Render HTML Elements to the DOM
// Syntax: ReactDOM.render(componentToRender, targetNode)
const JSX3 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))





// HTML Class in JSX
// You can no longer use the word class to define HTML classes. JSX uses className.
// The naming convention for all HTML attributes and event references in JSX become camelCase. onclick => onClick. 
const JSX4 = <div className="myDiv">
</div>;





// Self-Closing JSX Tags
// All tags must be closed, the slash go first if has content
const JSX5 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);





// Stateless Functional Component
// - can receive date and render it, but does not manage or track changes
// React requires that function name begins with capital letter
// Return JSX or null
const DemoComponent = function() {
  return <div>Statelss functional component with ES5</div>
};





// React Component ES6
// - has access to local state and lifecycle hooks
// -super() calls constructor of the parent class
// best practice: call a component's constructor with super, and pass props to both. 
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}





// Component with Composition
// You include the component child as a custom HTML tag with forward slash
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
          <ChildComponent/>
      </div>
    );
  }
};





// Render Nested Components
// Separate the code responsible for the UI from the code responsible for handling your application logic. 
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

const Fruits2 = () => {
  return (
    <div>
        <TypesOfFruit/>
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
          <Fruits/>
      </div>
    );
  }
};





// Compose React Components
// Rendering ES6 style class components within other components
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus/> {/*behind */}
        <Citrus/> {/*behind */}
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
        <Fruits/>
        <Vegetables /> {/*behind */}
      </div>
    );
  }
};





// Render a Class Component to the DOM
// ReactDOM.render(elementToRender, targetNode)
// ReactDOM.render(<ComponentToRender/>, targetNode)
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
        <Vegetables/>
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"))





// Write a React Component from Scratch
// React component is an ES6 class which extends React.Component. 
// It has a render method that returns HTML (from JSX) or null. 
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
// Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets
//for instance date={Date()}.
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
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};





// Pass an Array as Props
// To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
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
        <List tasks={['eat','sleep']}/>
        <h2>Tomorrow</h2>
        <List tasks={['code','code','code']}/>
      </div>
    );
  }
};





// Use Default Props
// If you pass null it will remain null
MyComponent.defaultProps = { location: 'San Francisco' }

const ShoppingCart2 = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart2.defaultProps = {items: 0}





// Override Default Props
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
    return <Items quantity={10}/>
  }
};





// Use PropTypes to Define the Props You Expect
//
// best practice: set propTypes when you know the type of a prop ahead of time. 
// {function: func, boolean: bool}
//  As of React v15.5.0, PropTypes is imported independently from React, like this: 
import PropTypes from 'prop-types';
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
Items.propTypes = {quantity: PropTypes.number.isRequired}
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
// Anytime you refer to a class component within itself, you use the this keyword.
// To access props within a class component, you preface the code that you use to access it with this.
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <Welcome name="seclet"/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <p>Hello, <strong>{this.props.name}</strong>!</p>
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
        <Camper/>
      </div>
    );
  }
};

const Camper2 = (props) => {
  return (
    <p>{props.name}</p>
  )
}
Camper2.defaultProps = {name:'CamperBot'}
Camper2.propTypes = {name: PropTypes.string.isRequired}

//no functional component
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="Alejandro"/>
      </div>
    );
  }
};

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

Camper.defaultProps = {name: "CamperBot"}
Camper.propTypes = {name: PropTypes.string.isRequired}





// Stateful Component
// Create a class component by extending React.Component in order to create state 
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: 'Ale'
      }
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
// state is completely encapsulated, or local to that component, unless you pass state data to a child component as props
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
          <h1>{this.state.name}</h1>
      </div>
    );
  }
};





// Render State in the User Interface Another Way
/**
 * Inside render() method write JS
 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
          <h1>{name}</h1>
      </div>
    );
  }
};





// Set State with this.setState
// this.setState(obj)
// setState method can be asynchronous https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
      this.setState({
        name: 'React Rocks!'
      })
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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
      this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};





// Use State to Toggle an Element
// you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.
this.setState(state => ({
  counter: state.counter + 1
}));

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
    toggleVisibility() {
      this.setState(state => ({
        visibility: !state.visibility
      }));
    }

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


  


// Write a Simple Counter
class Counter extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    count: 0
  };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }
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
    this.setState({
      count: 0
    })
  }
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
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.input}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};





// Create a Controlled Form
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
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
          <h1>{this.state.submit}</h1>
      </div>
    );
  }
}





// Pass State as Props to Child Components
// The first is unidirectional data flow.
// The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. 
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
         <Navbar name={this.state.name}/>
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
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};





// Pass a callback as props
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
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
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





// componentWillMount
// deprecated v. 17
// componentWillMount(), componentDidMount(), shouldComponentUpdate(), componentDidUpdate(), componentWillUnmount()
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('The coolest code')
  }
  render() {
    return <div />
  }
};





//componentDidMount
// best practice: place API calls or any calls to your server in componentDidMount(). This method is called after a component is mounted to the DOM. 
  // Any calls to setState() here will trigger a re-rendering of your component.
// It will automatically trigger an update once you receive the data.
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
    }, 500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}





// Add Event Listeners
//
// componentDidMount(), best place to attach any event listeners you need to add for specific functionality
// It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
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
// shoudComponentUpdate(nextProps, nextState)
// The method must return a boolean value that tells React whether or not to update the component. 
// You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    if(nextProps.value % 2 === 0) {
      return true;
    } 
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
  // Not accept kebab-case keys in the style object.
  // Default units: px
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>





// Add Inline Styles in React
// Other than the length values that default to px, all other property values should be wrapped in quotes.
const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple'
}

class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};





// Use Advanced JavaScript in React Render Method
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
    const answer = possibleAnswers[this.state.randomIndex]; 
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
          {answer}
        </p>
      </div>
    );
  }
}





// Render with an If-Else Condition
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
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      )
    }
  }
};





// Use && for a More Concise Conditional
// If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return false after evaluating the condition and return nothing. 
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
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};





// Use a Ternary Expression for Conditional Rendering
/**
 * if/else statements can't be inserted directly into JSX code
 * Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX.
 */
const inputStyle2 = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
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
        {this.state.userAge === "" ? 
        buttonOne : this.state.userAge < 18 ? 
        buttonThree : buttonTwo}
      </div>
    );
  }
}





// Render Conditionally from Props
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
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
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}





// Change Inline CSS Conditionally Based on Component State
//  There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React.
//  When you set a style object based on a condition, you describe how the UI should look as a function of the application's state.
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
    if (this.state.input.length > 15) {
      inputStyle = {
        border: "3px solid red"
      }
    }
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
// Write code to correctly handle that unknown state ahead of time. Using Array.map() in React illustrates this concept.
// You may know that all sibling child elements created by a mapping operation like this do need to be supplied with a unique key attribute.
//
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
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
    }); 
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
// React uses these keys to keep track of which items are added, changed, or removed
// Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.
// typically you should try to use a unique identification.
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
  })
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
    const usersOnline = this.state.users.filter(user => user.online === true); 
    const renderOnline = usersOnline.map(function(user) {
      return <li key={user.username}>{user.username}</li>
    }) 
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}





// Render React on the Server with renderToString
// First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. 
// Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
// The renderToString() method is provided on ReactDOMServer
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

ReactDOMServer.renderToString(<App/>)
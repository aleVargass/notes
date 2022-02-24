// you need to use react-redux to connect the Redux sotre with your component
class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "",
        messages: []
      }
    }
    render() {
      return <div />
    }
  };





  // manage state locally
  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: [],
        input: '',
      }
    }
    
    handleChange(e) {
      this.setState({
        input: e.target.value
      })
    }
  
    submitMessage() {
      this.setState({
        messages: this.state.messages.concat(this.state.input),
        input: "",
      })
    }
    
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>Add Message</button>
          <ul>{this.state.messages.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
      );
    }
  };





// extract logic to redux
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state.concat(action.message);
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer)





// use provider to connect redux to react
  // React Redux provides a snall API with Provider and connect
  // the Provider is a wrapper component that wraps your React app
  // provider takes two args, the Redux store and the child component of your app
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    )
  }
};





// map state to props
  // specify what state and actions you want to provide
  // behind scenes: store.subscribe() to implement mapStateToProps()
  // take state as argument, then return an object which maps that state to specific names
  // this properties will become accessible via props
const state = [];

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}





// map dispatch to props
  // is used to provide specific action creators to React components
  // return an object that map dispatch actions to property names which become components props
  // each property return a function that calls dispatch with an action creator and any relevant action data
  // you have access to this dispatch because its passed in to mapDispatchToProps()
  // behind: React Redux uses store.dispatch() to conduct these dispatches with mapDispatchToProps()
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message))
    }
  }
}





// connect Redux to React
  // to use state and dispatch to the props of one of your React components
  // takes two optional arguments, usage: ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Component)
  // remember assign it to a const
  // to omit one argument use null
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)





// connect redux to the message app
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

  // Container component
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};





// extract local state into redux
  // R  edux
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

  // React
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input)
    this.setState(({
      input: ''
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

  // ReactRedux
const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};





// behind scenes
  // work with npm and a file system 
  // work with React and Redux requires some config, https://github.com/facebookincubator/create-react-app to work 
  // you can enable Babel as a JS Processor, add React and ReactDOM
  // import React from 'react'
  // import ReactDOM from 'react-dom'
  // import { Provider, connect } from 'react-redux'
  // import { createStore, combineReducers, applyMiddleware } from 'redux'
  // import thunk from 'redux-thunk'

  // import rootReducer from './redux/reducers'
  // import App from './components/App'

  // const store = createStore(
  //   rootReducer,
  //   applyMiddleware(thunk)
  // );

  // ReactDOM.render(
  //   <Provider store={store}>
  //     <App/>
  //   </Provider>,
  //   document.getElementById('root')
  // );
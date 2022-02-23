// make a reducer
  // the store tracks for state of all components
  // usage: createStore(reducer(state:state)) on the Redux object
const reducer = (state = 5) => {
    return state;
  }
  
// Redux methods are available from a Redux object
const store = Redux.createStore(reducer)





// store.getState()
  // to retrieve the state
const store = Redux.createStore(
    (state = 5) => state
  );
  
let currentState = store.getState();





//  Redux Action
  // all state updates are triggered by dispatching actions
  // actions are simply JS objects that contains information about an action event
  // while the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.
const action = {
    type: "LOGIN"
}





// Action Creator
  // send the action to the Redux store to update it
  // are syimply JS functions that return an action
const action = {
  type: 'LOGIN'
}

function actionCreator() {
  return action
}





// Dispatch an Action Event
  // it uses to dispatch actions to the Redux store
  const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  store.dispatch(loginAction())





// handle action in the store
  // reducer takes state and action as arguments and it always return a new state
  // must always return a new copy of state
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === "LOGIN") {
      return {
        login: true
      }
    } else {
      return state
    }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};





// managing multiple actions
  // default if an action isnt related to the reducer
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {authenticated: true}
    case "LOGOUT":
      return {authenticated: false}
    default:
      return defaultState
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};





// use const
  // avoid misspelling
const LOGIN = "LOGIN",
      LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }
    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};





// store.subscribe()
  // allow you to subscribe listener functions to the store, when are dispatched to it
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

let count = 0;

const add = () => {
  count += 1;
  return {
    type: ADD
  }
}

store.subscribe(add)

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);





// combine multiple reducers
  // create a reducer for each piece of application state
  // the name you give to the keys will be used by Redux as the name for the associated piece of state
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
}) 

const store = Redux.createStore(rootReducer);





// send action data to the store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());





// use middleware 
  // handleAsync not related with asyncDataReducer, maybe Redux.applyMiddleware(ReduxThunk.default) take dispatch arg
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);





// a counter
const INCREMENT = "INCREMENT"; 
const DECREMENT = "DECREMENT"; 

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}; 

const incAction = () => {
  return {
    type: INCREMENT
  }
}; 

const decAction = () => {
  return {
    type: DECREMENT
  }
}; 

const store = Redux.createStore(counterReducer);










// immutable state wtih arr
  // shallow copy are immutable one-dimensional array
  // use slice() on state performs changes
  const ADD_TO_DO = 'ADD_TO_DO';

  const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
  ];
  
  const immutableReducer = (state = todos, action) => {
    switch(action.type) {
      case ADD_TO_DO:
        return state.concat(action.todo)
        // return [...state, action.todo]
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: ADD_TO_DO,
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);
  
  
  
  
  
  // remove items, immnutable state
  const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
         return [...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);
  
  
  
  
  
  // immutable state with objects
    // Object.assign(empty object, objects sources)
  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        return Object.assign({}, state, {status: "online"})
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);
// Redux.createStore(state=1 => state)
// If you had a React app with ten components, and each component had its own local state, the entire 
// state of your app would be defined by a single state object housed in the Redux [store]
// [createStore(reducer(state:state))] on the Redux object
const reducer = (state = 5) => {
    return state;
  }
  
// Redux methods are available from a Redux object
const store = Redux.createStore(reducer)





// store.getState()
const store = Redux.createStore(
    (state = 5) => state
  );
  
let currentState = store.getState()





//  Redux Action
// All state updates are triggered by dispatching actions
// While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.
const action = {
    type: "LOGIN"
}





// Action Creator
// works to update the state
const action = {
    type: 'LOGIN'
    }

function actionCreator() {
    return action
}





//Dispatch an Action Event
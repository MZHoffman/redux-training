import { createStore } from 'redux'

counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increnet') {
    return { counter: state.counter + 1 }
  }
  if (action.type === 'decrenet') {
    return { counter: state.counter - 1 }
  }
  return state
}

const store = createStore(counterReducer)

export default store

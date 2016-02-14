const initialState = {
  cats: []
}

function setState (state, mewState) {
  return Object.assign({}, state, mewState)
}

function removeCat (state, id) {
  return Object.assign({}, state, {
    cats: state.cats.filter(cat => cat.id !== id)
  })
}

function fetchCatsRequest (state) {
  return Object.assign({}, state)
}

function fetchCatsSuccess (state, cats) {
  return Object.assign({}, state, {cats})
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
  case "SET_STATE":
    return setState(state, action.state)
  case "REMOVE_CAT":
    return removeCat(state, action.id)
  case "FETCH_CATS_REQUEST":
    return fetchCatsRequest(state) // todo okay to have no action?
  case "FETCH_CATS_SUCCESS":
    return fetchCatsSuccess(state, action.cats)
  default:
    return state
  }
}

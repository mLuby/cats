function setState(state, newState) {
  return Object.assign({}, state, newState)
}

function removeCat(state, action){
  return Object.assign({}, state, {
    cats: cats.filter(cat => cat.id !== action.id)
  })
}

export default (state = {}, action) => {
  console.log('idk', state, action)
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state)
  case 'DELETE_CAT':
    return removeCat(state, action.id)
  }
  return state
}

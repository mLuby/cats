function setState(state, newState) {
  console.log('setting State')
  return Object.assign({}, state, newState)
}

function removeCat(state, id){
  console.log('removing Cat')
  return Object.assign({}, state, {
    cats: cats.filter(cat => cat.id !== id)
  })
}

export default (state = {}, action) => {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state)
  case 'DELETE_CAT':
    return removeCat(state, action.id)
  }
  return state
}

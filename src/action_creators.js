export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function removeCat(id) {
  console.log('action_creator removeCat', id)
  return {
    type: 'REMOVE_CAT',
    id
  }
}

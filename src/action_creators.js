export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function removeCat(id) {
  return {
    type: 'REMOVE_CAT',
    id
  }
}

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

export function getCatsStart() {
  return {
    type: 'GET_CATS_START'
  }
}

export function getCatsSuccess(cats) {
  return {
    type: 'GET_CATS_SUCCESS',
    cats
  }
}

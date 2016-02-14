const initialState = {
  rando: 'carrishian',
  cats: [
    {id: 3, src: 'http://25.media.tumblr.com/tumblr_llfmcijg3Z1qc97bxo1_400.gif', fact: `Cats must have fat in their diet because they can't produce it on their own`},
    {id: 6, src: 'http://24.media.tumblr.com/tumblr_mcgyk1QuXu1rppsk3o1_1280.jpg', fact: `fat produce it on their own`},
    {id: 8, src: 'http://24.media.tumblr.com/qgIb8tERiqpi9szcqwY6vCc9o1_500.jpg', fact: `have produce it on their own`},
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state)
  case 'ADD_CAT':
    return addCat(state, action.cat)
  case 'REMOVE_CAT':
    return removeCat(state, action.id)
  case 'GET_CATS_START':
    return getCatsStart(state) // todo okay to have no action?
  case 'GET_CATS_SUCCESS':
    return getCatsSuccess(state, action.cats)
  default:
    return state
  }
}

function setState(state, mewState) {
  return Object.assign({}, state, mewState)
}

function removeCat(state, id){
  return Object.assign({}, state, {
    cats: state.cats.filter(cat => cat.id !== id)
  })
}

function getCatsStart(state){
  console.log('reducer getCatsStart')
  return Object.assign({}, state)
}

function getCatsSuccess(state, cats){
  console.log('reducer getCatsSuccess')
  return Object.assign({}, state, {cats})
}

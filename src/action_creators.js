import axios from 'axios'

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

export function fetchCatsRequest() {
  return dispatch => {
    dispatch({ type: 'FETCH_CATS_REQUEST' })
    return axios
    .all([getCatFacts(), getCatImages()])
    .then(([catFacts, catImages]) => dispatch(fetchCatsSuccess(zip(catFacts, catImages, ['fact', 'src']))))
  }
}

export function fetchCatsSuccess(cats) {
  return {
    type: 'FETCH_CATS_SUCCESS',
    cats
  }
}

// helpers
function xmlToUrls (xmlString) { return xmlString.match(/<url>.*<\/url>/g).map(urlTagStringToUrl) }
function urlTagStringToUrl (urlTagString) { return urlTagString.trim().slice(5,-6) }
function zip (xs, ys, keys) { return xs.map((x,index) => ({id:index, [keys[0]]:x, [keys[1]]:ys[index]})) } // where keys=['fact','image']
function getCatFacts () { return axios.get('http://localhost:3000/cat-facts').then(response => response.data.facts) }
function getCatImages () { return axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=25').then(response => xmlToUrls(response.data)) }

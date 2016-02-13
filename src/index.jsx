import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import {setState} from './action_creators'
import App from './components/App'
import httpGet from './ajax'

const initialState = {
  rando: 'carrishian',
  cats: [
    {id: 3, src: 'http://25.media.tumblr.com/tumblr_llfmcijg3Z1qc97bxo1_400.gif', fact: `Cats must have fat in their diet because they can't produce it on their own`},
    {id: 6, src: 'http://24.media.tumblr.com/tumblr_mcgyk1QuXu1rppsk3o1_1280.jpg', fact: `fat produce it on their own`},
    {id: 8, src: 'http://24.media.tumblr.com/qgIb8tERiqpi9szcqwY6vCc9o1_500.jpg', fact: `have produce it on their own`},
  ]
}

const Store = createStore(reducer, initialState)

ReactDOM.render((
  <Provider store={Store}>
    <App {...Store.getState()} />
  </Provider>
  ), document.getElementById('app')
)

function xmlToUrls (xmlString) { return xmlString.match(/<url>.*<\/url>/g).map(urlTagStringToUrl) }
function urlTagStringToUrl (urlTagString) { return urlTagString.trim().slice(5,-6) }
function zip(xs, ys, keys){ // where keys=['fact','image']
  return xs.map((x,index) => ({id:index, [keys[0]]:x, [keys[1]]:ys[index]}))
}

// const catFactsUrl = 'https://catfacts-api.appspot.com/api/facts?number=25'
const catFactsUrl = 'http://localhost:3000/cat-facts'
const catImagesUrl = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=25'
let catFacts = []
let catImages = []
httpGet(catFactsUrl, data => {
  console.log('get facts done:', JSON.parse(data).facts)
  catFacts = catFacts.concat(JSON.parse(data).facts)
  if(catFacts.length && catImages.length){ updateCats(Store) }
})
httpGet(catImagesUrl, data => {
  console.log('get images done:', xmlToUrls(data))
  catImages = catImages.concat(xmlToUrls(data))
  if(catFacts.length && catImages.length){ updateCats(Store) }
})

function updateCats (Store) {
  console.log('updating Cats')
  const newState = {cats: zip(catFacts, catImages, ['fact', 'image'])}
  Store.dispatch(setState(newState))
  debugger
}

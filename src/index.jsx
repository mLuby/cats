import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import * as action_creators from './action_creators'
import App from './components/App'
import httpGet from './ajax'

const store = createStore(reducer)
// store.dispatch(setState())

ReactDOM.render((
  <Provider store={store}>
    <App {...store.getState()} {...action_creators} />
  </Provider>
  ), document.getElementById('app')
)

// todo fetch cats on app.componentWillMount
// todo switch to import 'whatwg-fetch'
//   or import axios from 'axios'
//   or 'superagent-promise'
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
  if(catFacts.length && catImages.length){ updateCats(store) }
})
httpGet(catImagesUrl, data => {
  console.log('get images done:', xmlToUrls(data))
  catImages = catImages.concat(xmlToUrls(data))
  if(catFacts.length && catImages.length){ updateCats(store) }
})
function updateCats (store) {
  console.log('updating Cats')
  const newState = {cats: zip(catFacts, catImages, ['fact', 'src'])}
  store.dispatch(action_creators.setState(newState))
}

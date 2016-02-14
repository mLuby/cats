import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import * as action_creators from './action_creators'
import App from './components/App'
import axios from 'axios'

const store = createStore(reducer)
// store.dispatch(setState())

ReactDOM.render((
  <Provider store={store}>
    <App {...store.getState()} {...action_creators} />
  </Provider>
  ), document.getElementById('app')
)

function xmlToUrls (xmlString) { return xmlString.match(/<url>.*<\/url>/g).map(urlTagStringToUrl) }
function urlTagStringToUrl (urlTagString) { return urlTagString.trim().slice(5,-6) }
function zip(xs, ys, keys){ // where keys=['fact','image']
  return xs.map((x,index) => ({id:index, [keys[0]]:x, [keys[1]]:ys[index]}))
}
function getCatFacts () { return axios.get('http://localhost:3000/cat-facts').then(response => response.data.facts) }
function getCatImages () { return axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=25').then(response => xmlToUrls(response.data)) }
axios.all([getCatFacts(), getCatImages()]).then(([catFacts, catImages]) => {
  const mewState = {cats: zip(catFacts, catImages, ['fact', 'src'])}
  store.dispatch(action_creators.setState(mewState))
})

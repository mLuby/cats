import React from 'react'
import ReactDOM from 'react-dom'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import reducer from './reducer'
// import {setState} from './action_creators'
import App from './components/App'

const initialState = {
  rando: 'carrishian',
  cats: [
    {id: 3, src: 'http://25.media.tumblr.com/tumblr_llfmcijg3Z1qc97bxo1_400.gif', fact: `Cats must have fat in their diet because they can't produce it on their own`},
    {id: 6, src: 'http://24.media.tumblr.com/tumblr_mcgyk1QuXu1rppsk3o1_1280.jpg', fact: `fat produce it on their own`},
    {id: 8, src: 'http://24.media.tumblr.com/qgIb8tERiqpi9szcqwY6vCc9o1_500.jpg', fact: `have produce it on their own`},
  ]
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case DELETE:
      return Object.assign({}, state, {
        cats: cats.filter(cat => cat.id !== action.cat_id)
      })
    default:
      return state
  }
}

// const Store = createStore(console.log, [{img:'xyz', fact:'hairy'}])
function makeRequest (url, callback) {
  var httpRequest;
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.onreadystatechange = responseHandler;
  httpRequest.open('GET', url);
  httpRequest.send();
  function responseHandler () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        callback(JSON.parse(httpRequest.responseText));
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}

ReactDOM.render((
  // <Provider store={Store}>
  //   <App />
  // </Provider>
  <div>heyo!
    <div className="cats">cats:
      <App cats={initialState.cats} />
    </div>
  </div>
  ), document.getElementById('app')
)

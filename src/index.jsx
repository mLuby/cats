import React from 'react'
import ReactDOM from 'react-dom'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import reducer from './reducer'
// import {setState} from './action_creators'
// import App from './components/App'
// import {ResultsContainer} from './components/Results'

const initialState = {
  rando: 'carrishian',
  cats: [
    {id: 3, src: 'http:3', fact: `Cats must have fat in their diet because they can't produce it on their own`},
    {id: 6, src: 'http:6', fact: `fat produce it on their own`},
    {id: 8, src: 'http:8', fact: `have produce it on their own`},
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

// React.render(<App cards={data.response} />, document.body)

const Cats = ({cats}) => {
  console.log('cats', cats)
  return <div>{JSON.stringify(cats)}</div>
}
ReactDOM.render((
  // <Provider store={Store}>
  //   <App />
  // </Provider>
  <div>heyo!
    <div className="cats">cats:
      <Cats cats={initialState.cats}/>
    </div>
  </div>
  ), document.getElementById('app')
)

// get 25 cat images
// get 25 cat facts
// zip images and facts
// display each (image,fact)

// allow deletion

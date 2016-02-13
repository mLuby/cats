import React, { PropTypes } from 'react'
import Cat from './cat'

function renderCat (cat) {
  return <Cat {...cat} key={cat.id}/>
}

const App = ({cats}) => (<div>
  {cats.map(renderCat)}
</div>)

App.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    fact: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default App

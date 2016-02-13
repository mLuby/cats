import React from 'react'
import Cat from './cat'

// pros: es6 -> implicit return -> short, cons: not named, value or function?
// const renderCat = cat => <Cat {...cat} key={cat.id}/>
// ^ vs v ? todo
// pros: hoisted, named, definitely a function cons: long
function renderCat (cat) {
  return <Cat {...cat} key={cat.id}/>
}

export default ({cats}) => (<div>
  {cats.map(renderCat)}
</div>)

import React from 'react'

export default ({src, fact}) => (<div className='cat'>
  <img src={src} className='image' />
  <p className='fact'>{fact}</p>
</div>)

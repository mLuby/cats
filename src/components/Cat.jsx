import React, { PropTypes } from 'react'

const Cat = ({src, fact}) => (<div className='cat'>
  <img src={src} className='image' />
  <p className='fact'>{fact}</p>
</div>)

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired
}

export default Cat

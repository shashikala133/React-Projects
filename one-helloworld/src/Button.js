import React from 'react'

const Button =({title="nothing",button}) => ( // if u use parenthesis no need of writing return keyword
  <div>
      <button className={button}>{title}</button>
      
  </div>

)
export default Button;
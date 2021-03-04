import React from 'react'
import './Button.scss'

const Button: React.FC<any> = (p) => {
  return (
    <button className={`btn ${p.className || ''}`}>{p.children}</button>
  )
}

export default Button

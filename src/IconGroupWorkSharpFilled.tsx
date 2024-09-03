import React from 'react'
import { IconProps } from './types'

const IconGroupWorkSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320q33 0 56.5-23.5T400-400q0-33-23.5-56.5T320-480q-33 0-56.5 23.5T240-400q0 33 23.5 56.5T320-320Zm320 0q33 0 56.5-23.5T720-400q0-33-23.5-56.5T640-480q-33 0-56.5 23.5T560-400q0 33 23.5 56.5T640-320ZM480-560q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 480q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconGroupWorkSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconMan4Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m400-80-68-509q-5-36 19-63.5t60-27.5h138q36 0 60 27.5t19 63.5L560-80H400Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
  </svg>
)

export { IconMan4Outlined as default }

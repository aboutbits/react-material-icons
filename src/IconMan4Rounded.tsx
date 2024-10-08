import React from 'react'
import { IconProps } from './types'

const IconMan4Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m395-115-63-474q-5-36 19-63.5t60-27.5h138q36 0 60 27.5t19 63.5l-63 474q-2 15-13.5 25T525-80h-90q-15 0-26.5-10T395-115Zm85-605q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
  </svg>
)

export { IconMan4Rounded as default }

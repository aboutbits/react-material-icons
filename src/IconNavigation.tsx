import React from 'react'
import { IconProps } from './types'

const IconNavigation: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </svg>
)

export { IconNavigation as default }

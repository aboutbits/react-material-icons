import React from 'react'
import { IconProps } from './types'

const IconSpeed125Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-280v-80h80v80h-80Zm400 0v-80h160v-80H660v-240h240v80H740v80h80q33 0 56.5 23.5T900-440v80q0 33-23.5 56.5T820-280H660Zm-280 0v-160q0-33 23.5-56.5T460-520h80v-80H380v-80h160q33 0 56.5 23.5T620-600v80q0 33-23.5 56.5T540-440h-80v80h160v80H380Zm-240 0v-320H60v-80h160v400h-80Z" />
  </svg>
)

export { IconSpeed125Outlined as default }
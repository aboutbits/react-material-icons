import React from 'react'
import { IconProps } from './types'

const IconSpeed12Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-320h-80v-80h160v400h-80Zm120 0v-80h80v80h-80Zm120 0v-240h160v-80H520v-80h240v240H600v80h160v80H520Z" />
  </svg>
)

export { IconSpeed12Sharp as default }

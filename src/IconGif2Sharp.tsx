import React from 'react'
import { IconProps } from './types'

const IconGif2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-400h320v80H160v240h160v-80h-80v-80h160v240H80Zm400 0v-400h80v400h-80Zm160 0v-400h280v80H720v80h160v80H720v160h-80Z" />
  </svg>
)

export { IconGif2Sharp as default }

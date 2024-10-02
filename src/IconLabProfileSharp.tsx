import React from 'react'
import { IconProps } from './types'

export const IconLabProfileSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h359l121 158v-558H240v400Zm0 240h442L560-320H240v160Zm560 80H160v-800h640v800Zm-560-80v-640 640Zm0-160v-80 80Z" />
  </svg>
)

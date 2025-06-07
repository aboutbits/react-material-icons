import React from 'react'
import { IconProps } from './types.js'

export const IconAdGroupOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m828-245-75-75h47v-400H353L245-828v-52h635v635h-52Zm-8 217L608-240H240v-368L28-820l56-56L876-84l-56 56ZM320-320h208L320-528v208ZM80-80v-640h80v560h560v80H80Zm345-343Zm114-111Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconTvOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m853-221-53-53v-486H314l-80-80h646v619h-27ZM127-833l73 73h-40v480h406L28-820l56-56L876-84l-56 56-172-172h-8v80H320v-80H80v-633h47Zm237 351Zm195-33Z" />
  </svg>
)

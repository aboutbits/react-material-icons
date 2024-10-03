import React from 'react'
import { IconProps } from './types.js'

export const IconChessOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-160q0-33 23.5-56.5T200-320h52l22-160H160v-80h640v80H686l22 160h52q33 0 56.5 23.5T840-240v160H120Zm138-540-58-260q33 25 68 47t77 22q40 0 73.5-20.5T480-880q28 28 61.5 48.5T615-811q42 0 77-22t68-47l-57 260H258Z" />
  </svg>
)

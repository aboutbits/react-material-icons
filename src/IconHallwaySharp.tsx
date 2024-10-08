import React from 'react'
import { IconProps } from './types'

const IconHallwaySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-720h200l160-160 160 160h200v720H120Zm80-80h560v-560H200v560Zm40-80h480L570-440 450-280l-90-120-120 160Zm164-560h152l-76-76-76 76ZM200-160v-560 560Z" />
  </svg>
)

export { IconHallwaySharp as default }

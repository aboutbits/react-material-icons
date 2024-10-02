import React from 'react'
import { IconProps } from './types'

export const IconHallwaySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-720h200l160-160 160 160h200v720H120Zm120-160h480L570-440 450-280l-90-120-120 160Zm164-560h152l-76-76-76 76Z" />
  </svg>
)

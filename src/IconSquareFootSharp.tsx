import React from 'react'
import { IconProps } from './types.js'

export const IconSquareFootSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-742l164 164-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 154 154H120Zm120-120h332L240-572v332Z" />
  </svg>
)

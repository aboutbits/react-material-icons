import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardOptionKeySharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M591-200 314-680H120v-80h240l277 480h203v80H591Zm9-480v-80h240v80H600Z" />
  </svg>
)

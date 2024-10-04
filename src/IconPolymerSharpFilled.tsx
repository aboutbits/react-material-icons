import React from 'react'
import { IconProps } from './types.js'

export const IconPolymerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M198-160 20-480l180-320h160L180-480l104 186 312-506h164l180 320-180 320H600l180-320-104-184-310 504H198Z" />
  </svg>
)

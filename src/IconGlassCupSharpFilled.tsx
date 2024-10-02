import React from 'react'
import { IconProps } from './types'

export const IconGlassCupSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m208-80-88-800h720L752-80H208Zm55-240h435l52-480H210l53 480Z" />
  </svg>
)

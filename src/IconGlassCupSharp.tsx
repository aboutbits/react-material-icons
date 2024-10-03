import React from 'react'
import { IconProps } from './types.js'

export const IconGlassCupSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m208-80-88-800h720L752-80H208Zm63-160 9 80h400l9-80H271Zm-8-80h435l52-480H210l53 480Zm8 160h418-418Z" />
  </svg>
)

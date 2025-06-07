import React from 'react'
import { IconProps } from './types.js'

export const IconPermMediaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Zm160-160h400L622-620l-92 120-62-80-108 140Z" />
  </svg>
)

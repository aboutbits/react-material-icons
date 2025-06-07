import React from 'react'
import { IconProps } from './types.js'

export const IconTabSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm440-400h280v-160H520v160Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconContextualTokenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320h280v-120H240v120Zm360 0h120v-320H600v320ZM240-520h280v-120H240v120ZM80-160v-640h800v640H80Z" />
  </svg>
)

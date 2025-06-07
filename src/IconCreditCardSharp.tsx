import React from 'react'
import { IconProps } from './types.js'

export const IconCreditCardSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-480h640v-80H160v80Zm0 400h640v-240H160v240Zm0 0v-480 480Z" />
  </svg>
)

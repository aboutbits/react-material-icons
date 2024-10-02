import React from 'react'
import { IconProps } from './types'

export const IconVideoFileSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200ZM320-240h240v-80l80 42v-164l-80 42v-80H320v240Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconDeleteForeverSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56ZM200-120v-600h-40v-80h200v-40h240v40h200v80h-40v600H200Z" />
  </svg>
)

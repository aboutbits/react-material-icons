import React from 'react'
import { IconProps } from './types.js'

export const IconCarryOnBagInactiveSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 642-203q8 8 13 19t5 24q0 25-17.5 42.5T600-100q-25 0-42.5-17.5T540-160q0-25 17.5-42.5T600-220q12 0 21.5 3.5T639-206l-69-70q-40 11-65 42.5T480-160q0 11 1.5 20.5T487-120H380v-346l-60-60v406H200v-528L56-792l56-56 736 736-56 56ZM600-474 394-680h126v-120h-80v-80h160v406Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types'

export const IconRawOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 56-792l56-56 736 736-56 56Zm-52-304-30-122-24 94-98-96-28-116h60l30 120 30-120h60l30 120 30-120h60l-60 240h-60Zm-390 0 42-168 48 48 60 60h-74l-16 60h-60Zm-230 0v-240h200v156h-36l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40Z" />
  </svg>
)

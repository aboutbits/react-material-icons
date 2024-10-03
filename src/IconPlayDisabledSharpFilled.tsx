import React from 'react'
import { IconProps } from './types.js'

export const IconPlayDisabledSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M658-416 320-754v-6l440 280-102 64ZM790-56 520-328 320-200v-328L56-792l56-56 736 736-58 56Z" />
  </svg>
)

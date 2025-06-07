import React from 'react'
import { IconProps } from './types.js'

export const IconEditOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M622-453 453-622l252-252 168 171-251 250ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-88-592 56-56-56-56-56 56 56 56Z" />
  </svg>
)

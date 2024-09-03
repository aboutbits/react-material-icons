import React from 'react'
import { IconProps } from './types'

const IconAddColumnLeftSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-720h320v720H560Zm-400 0v-164q10 2 19.5 3t20.5 1q83 0 141.5-58T400-480q0-84-58.5-142T200-680q-11 0-20.5 1t-19.5 3v-164h320v720H160Zm0-240v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconAddColumnLeftSharpFilled as default }

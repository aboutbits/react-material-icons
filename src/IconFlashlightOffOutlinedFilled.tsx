import React from 'react'
import { IconProps } from './types.js'

export const IconFlashlightOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80v-448L56-792l56-56 736 736-56 56-152-152v128H320Zm-80-754v-46h480v120H314l-74-74Zm400 400L394-680h326v40l-80 120v86Z" />
  </svg>
)

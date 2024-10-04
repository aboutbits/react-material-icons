import React from 'react'
import { IconProps } from './types.js'

export const IconNearbyOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m752-320-72-72 88-88-288-288-88 88-72-72 102-102q12-12 27-18.5t31-6.5q16 0 30.5 6t26.5 18l319 319q24 23 24 55.5T856-424L752-320Zm41 263L642-208 536-104q-12 11-26.5 17T480-81q-15 0-29.5-5.5T424-104L105-423q-12-12-18-26.5T81-479q0-15 6-29.5t18-26.5l103-104L56-792l56-56 736 736-55 55ZM193-479l287 287 90-88-57-57-33 33-175-175 33-33-56-56-89 89Zm431 31L448-624l32-32 176 176-32 32Z" />
  </svg>
)
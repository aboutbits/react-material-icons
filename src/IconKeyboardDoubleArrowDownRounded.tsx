import React from 'react'
import { IconProps } from './types'

const IconKeyboardDoubleArrowDownRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-313 156-155q11-11 27.5-11.5T692-468q11 11 11 28t-11 28L508-228q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L268-412q-11-11-11.5-27.5T268-468q11-11 28-11t28 11l156 155Zm0-240 156-155q11-11 27.5-11.5T692-708q11 11 11 28t-11 28L508-468q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L268-652q-11-11-11.5-27.5T268-708q11-11 28-11t28 11l156 155Z" />
  </svg>
)

export { IconKeyboardDoubleArrowDownRounded as default }

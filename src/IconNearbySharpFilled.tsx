import React from 'react'
import { IconProps } from './types'

const IconNearbySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-304 304-480l176-176 176 176-176 176Zm0 255L49-480l431-431 431 431L480-49Zm0-143 288-288-288-288-288 288 288 288Z" />
  </svg>
)

export { IconNearbySharpFilled as default }

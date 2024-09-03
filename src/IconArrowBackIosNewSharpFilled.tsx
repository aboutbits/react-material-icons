import React from 'react'
import { IconProps } from './types'

const IconArrowBackIosNewSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
  </svg>
)

export { IconArrowBackIosNewSharpFilled as default }

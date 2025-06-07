import React from 'react'
import { IconProps } from './types.js'

export const IconHexagonOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M272-120 64-480l208-360h416l208 360-208 360H272Z" />
  </svg>
)

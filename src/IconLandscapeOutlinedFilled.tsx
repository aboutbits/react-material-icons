import React from 'react'
import { IconProps } from './types.js'

export const IconLandscapeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m40-240 240-320 180 240h101L410-520l150-200 360 480H40Z" />
  </svg>
)

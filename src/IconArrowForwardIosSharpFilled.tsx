import React from 'react'
import { IconProps } from './types'

export const IconArrowForwardIosSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
  </svg>
)

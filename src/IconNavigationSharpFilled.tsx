import React from 'react'
import { IconProps } from './types.js'

export const IconNavigationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Z" />
  </svg>
)

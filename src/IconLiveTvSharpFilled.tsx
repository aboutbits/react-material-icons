import React from 'react'
import { IconProps } from './types'

export const IconLiveTvSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m380-340 280-180-280-180v360Zm-60 220v-80H80v-640h800v640H640v80H320Z" />
  </svg>
)

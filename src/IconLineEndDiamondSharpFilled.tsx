import React from 'react'
import { IconProps } from './types.js'

export const IconLineEndDiamondSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-200 360-440H80v-80h280l240-240 280 280-280 280Z" />
  </svg>
)

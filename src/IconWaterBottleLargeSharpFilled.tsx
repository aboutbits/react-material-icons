import React from 'react'
import { IconProps } from './types.js'

export const IconWaterBottleLargeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-240h80v-200h-80v-240h200v-40h-40v-80h240v80h-40v40h200v240h-80v200h80v240H200Z" />
  </svg>
)

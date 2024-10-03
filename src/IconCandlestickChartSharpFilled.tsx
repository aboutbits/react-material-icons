import React from 'react'
import { IconProps } from './types.js'

export const IconCandlestickChartSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160v-80h-80v-480h80v-80h80v80h80v480h-80v80h-80Zm320 0v-200h-80v-280h80v-160h80v160h80v280h-80v200h-80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconMonitorHeartSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-520v-280h800v280H665l-78-156h-54L400-410l-55-110H80Zm0 360v-280h215l78 156h54l133-266 55 110h265v280H80Z" />
  </svg>
)

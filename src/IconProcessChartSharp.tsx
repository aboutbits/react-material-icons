import React from 'react'
import { IconProps } from './types.js'

export const IconProcessChartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m132-222-72-36 240-480 72 36-240 480Zm264 0-72-36 240-480 72 36-240 480Zm264 0-72-36 240-480 72 36-240 480Z" />
  </svg>
)

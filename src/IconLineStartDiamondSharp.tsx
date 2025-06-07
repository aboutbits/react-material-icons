import React from 'react'
import { IconProps } from './types.js'

export const IconLineStartDiamondSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-313 167-167-167-167-167 167 167 167Zm0 113L80-480l280-280 240 240h280v80H600L360-200Zm0-280Z" />
  </svg>
)

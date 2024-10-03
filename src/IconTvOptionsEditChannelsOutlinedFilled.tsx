import React from 'react'
import { IconProps } from './types.js'

export const IconTvOptionsEditChannelsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-320v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm160 320v-80h160v80H240Zm0-160v-80h520v80H240Zm0-160v-80h520v80H240Zm398 480L468-330l57-57 113 113 226-226 56 58-282 282Z" />
  </svg>
)

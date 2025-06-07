import React from 'react'
import { IconProps } from './types.js'

export const IconFeaturedPlayListSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-440h360v-80H240v80Zm0-120h360v-80H240v80ZM80-160v-640h800v640H80Z" />
  </svg>
)

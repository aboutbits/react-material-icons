import React from 'react'
import { IconProps } from './types.js'

export const IconDesktopLandscapeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320h360v-200H240v200Zm420-120h60v-200H360v60h300v140ZM80-160v-640h800v640H80Z" />
  </svg>
)

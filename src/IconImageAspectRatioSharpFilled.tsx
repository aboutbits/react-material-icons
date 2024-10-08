import React from 'react'
import { IconProps } from './types'

const IconImageAspectRatioSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-480h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconImageAspectRatioSharpFilled as default }

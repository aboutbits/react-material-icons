import React from 'react'
import { IconProps } from './types'

const IconAspectRatioSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconAspectRatioSharp as default }

import React from 'react'
import { IconProps } from './types.js'

export const IconSipSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h80v-240h-80v240Zm120 0h60v-80h140v-160H560v240Zm-360 0h200v-150H260v-30h140v-60H200v150h140v30H200v60Zm420-140v-40h80v40h-80ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

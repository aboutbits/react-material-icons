import React from 'react'
import { IconProps } from './types.js'

export const IconFiberPinSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360h60v-80h140v-160H200v240Zm250 0h60v-240h-60v240Zm110 0h50v-140l102 140h48v-240h-50v140L610-600h-50v240ZM260-500v-40h80v40h-80ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

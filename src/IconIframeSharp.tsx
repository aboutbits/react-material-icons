import React from 'react'
import { IconProps } from './types.js'

export const IconIframeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM80-160v-640h800v640H80Zm80-80h640v-400H160v400Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconPanToolSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M339-40 48-465l69-66 163 114v-423h80v577L212-367l169 247h379v-680h80v760H339Zm101-440v-440h80v440h-80Zm160 0v-400h80v400h-80Zm-80 180Z" />
  </svg>
)

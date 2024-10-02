import React from 'react'
import { IconProps } from './types'

export const IconVideoStableSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm519 0 92-346-488-134-92 346 488 134Zm-57-98-333-92 51-192 333 92-51 192Zm-462 98v-480 480Z" />
  </svg>
)

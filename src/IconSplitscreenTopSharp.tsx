import React from 'react'
import { IconProps } from './types'

export const IconSplitscreenTopSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-520v-320h720v320H120Zm0 400v-320h720v320H120Zm80-80h560v-160H200v160Z" />
  </svg>
)

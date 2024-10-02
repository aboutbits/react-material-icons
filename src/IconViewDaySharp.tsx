import React from 'react'
import { IconProps } from './types'

export const IconViewDaySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-80h720v80H120Zm0-160v-320h720v320H120Zm80-80h560v-160H200v160Zm-80-320v-80h720v80H120Zm80 320v-160 160Z" />
  </svg>
)

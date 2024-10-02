import React from 'react'
import { IconProps } from './types'

export const IconViewComfyAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-560v-320h320v320H80Zm0 480v-320h320v320H80Zm480-480v-320h320v320H560Zm0 480v-320h320v320H560Z" />
  </svg>
)

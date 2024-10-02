import React from 'react'
import { IconProps } from './types'

export const IconBrowseSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-240h320v240H120Zm400 0v-400h320v400H520ZM120-440v-400h320v400H120Zm400-160v-240h320v240H520Z" />
  </svg>
)

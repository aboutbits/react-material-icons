import React from 'react'
import { IconProps } from './types'

export const IconAirplaySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-120 240-240 240 240H240ZM80-200v-640h800v640H680v-80h120v-480H160v480h120v80H80Zm400-280Z" />
  </svg>
)

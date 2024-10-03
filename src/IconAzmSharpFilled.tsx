import React from 'react'
import { IconProps } from './types.js'

export const IconAzmSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m640-280 160-160v-360H440L280-640h360v360ZM400-40l160-160v-360H200L40-400h360v360Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconMuseumOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h80v-360H80v-80l400-280 400 280v80h-80v360h80v80H80Zm240-160h80v-160l80 120 80-120v160h80v-280h-80l-80 120-80-120h-80v280Z" />
  </svg>
)

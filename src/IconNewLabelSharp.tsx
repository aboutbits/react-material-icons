import React from 'react'
import { IconProps } from './types.js'

export const IconNewLabelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160v-80h120l180-240-180-240H160v200H80v-280h560l240 320-240 320H480Zm-10-320ZM200-120v-120H80v-80h120v-120h80v120h120v80H280v120h-80Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconOpenJamSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120h480v-80H520v-288l64 64 56-56-160-160-160 160 56 56 64-64v288H240v80Zm240-360ZM80-320v-520h800v520H600v-80h200v-360H160v360h200v80H80Z" />
  </svg>
)

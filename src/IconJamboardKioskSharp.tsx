import React from 'react'
import { IconProps } from './types'

export const IconJamboardKioskSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80h200v-120H80v-520h800v520H520v120h200v80H240Zm-80-280h640v-360H160v360Zm0 0v-360 360Z" />
  </svg>
)

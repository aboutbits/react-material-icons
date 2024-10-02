import React from 'react'
import { IconProps } from './types'

export const IconPhotoCameraBackSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm80-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240ZM240-280h480L570-480 450-320l-90-120-120 160Z" />
  </svg>
)

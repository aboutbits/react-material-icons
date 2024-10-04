import React from 'react'
import { IconProps } from './types'

const IconContextualTokenAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h480v80H160v480h640v-280h80v360H80Zm160-160h280v-120H240v120Zm0-200h280v-120H240v120Zm360 200h120v-200H600v200Zm-440 80v-480 480Zm560-360v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconContextualTokenAddSharp as default }

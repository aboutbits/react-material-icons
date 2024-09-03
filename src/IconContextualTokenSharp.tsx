import React from 'react'
import { IconProps } from './types'

const IconContextualTokenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320h280v-120H240v120Zm360 0h120v-320H600v320ZM240-520h280v-120H240v120Zm-80 280h640v-480H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Z" />
  </svg>
)

export { IconContextualTokenSharp as default }

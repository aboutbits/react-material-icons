import React from 'react'
import { IconProps } from './types'

const IconMan3Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-70v-280h-80v-320h320v320h-80v280H400Zm80-630-90-90 90-90 90 90-90 90Z" />
  </svg>
)

export { IconMan3Sharp as default }

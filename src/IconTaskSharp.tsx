import React from 'react'
import { IconProps } from './types'

const IconTaskSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
  </svg>
)

export { IconTaskSharp as default }

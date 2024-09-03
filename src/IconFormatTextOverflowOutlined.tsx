import React from 'react'
import { IconProps } from './types'

const IconFormatTextOverflowOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-640h80v640h-80Zm498-178-56-57 45-45H320v-80h327l-45-45 56-57 142 142-142 142ZM480-160v-200h80v200h-80Zm0-440v-200h80v200h-80Z" />
  </svg>
)

export { IconFormatTextOverflowOutlined as default }
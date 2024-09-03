import React from 'react'
import { IconProps } from './types'

const IconMovedLocationOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m720-440-56-56 86-86q-43-8-137.5 9T400-441q32-117 129-188t219-71l-84-84 56-56 200 200-200 200ZM480-80Q319-217 239.5-334.5T160-552q0-136 93-232t227-96q35 0 70 7.5t67 22.5l-62 62q-18-6-37-9t-38-3q-101 0-170.5 72.5T240-552q0 71 59 162t181 203q60-55 105-105t74-96l58 58q-40 59-99 121T480-80Z" />
  </svg>
)

export { IconMovedLocationOutlined as default }
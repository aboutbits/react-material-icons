import React from 'react'
import { IconProps } from './types'

export const IconAllMatchOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M496-480ZM80-160l240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-5 7q-27-18-58.5-29.5T751-518L600-720H240l180 240-180 240h200q0 21 3 41t9 39H80Zm611 10 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
  </svg>
)

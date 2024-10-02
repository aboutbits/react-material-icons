import React from 'react'
import { IconProps } from './types'

export const IconSdOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm120-200h120q17 0 28.5-11.5T440-400v-60q0-17-11.5-28.5T400-500H300v-40h80v20h60v-40q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v60q0 17 11.5 28.5T280-460h100v40h-80v-20h-60v40q0 17 11.5 28.5T280-360Zm240 0h160q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600H520v240Zm60-60v-120h80v120h-80Z" />
  </svg>
)

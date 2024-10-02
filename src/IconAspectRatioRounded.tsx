import React from 'react'
import { IconProps } from './types'

export const IconAspectRatioRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-360h-80q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280h120q17 0 28.5-11.5T760-320v-120q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440v80ZM280-600h80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680H240q-17 0-28.5 11.5T200-640v120q0 17 11.5 28.5T240-480q17 0 28.5-11.5T280-520v-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

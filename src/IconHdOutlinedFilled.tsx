import React from 'react'
import { IconProps } from './types'

const IconHdOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h60v-80h80v80h60v-240h-60v100h-80v-100h-60v240Zm280 0h160q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600H520v240Zm60-60v-120h80v120h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)

export { IconHdOutlinedFilled as default }

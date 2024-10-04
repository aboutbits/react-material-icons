import React from 'react'
import { IconProps } from './types'

const IconGifOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-360v-240h60v240h-60Zm-220 0q-18 0-29-12.5T200-400v-160q0-15 11-27.5t29-12.5h120q18 0 29 12.5t11 27.5v20H260v120h80v-60h60v80q0 15-11 27.5T360-360H240Zm340 0v-240h180v60H640v40h80v60h-80v80h-60Z" />
  </svg>
)

export { IconGifOutlinedFilled as default }

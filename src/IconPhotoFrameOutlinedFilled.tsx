import React from 'react'
import { IconProps } from './types.js'

export const IconPhotoFrameOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-17 0-28.5-11.5T200-160v-40h-80q-33 0-56.5-23.5T40-280v-440q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v440q0 33-23.5 56.5T840-200h-80v40q0 17-11.5 28.5T720-120H240Zm-40-240h560L580-600 440-420 340-540 200-360Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconPhotoAlbumOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm40-80h400L545-420 440-280l-65-87-95 127Zm-40 80v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
  </svg>
)

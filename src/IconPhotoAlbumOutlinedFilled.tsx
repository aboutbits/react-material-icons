import React from 'react'
import { IconProps } from './types'

const IconPhotoAlbumOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm40-160h400L545-420 440-280l-65-87-95 127Zm160-280 100-60 100 60v-280H440v280Z" />
  </svg>
)

export { IconPhotoAlbumOutlinedFilled as default }

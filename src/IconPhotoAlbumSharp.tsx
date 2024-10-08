import React from 'react'
import { IconProps } from './types'

const IconPhotoAlbumSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm80-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm40-80h400L545-420 440-280l-65-87-95 127Zm-40 80v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
  </svg>
)

export { IconPhotoAlbumSharp as default }

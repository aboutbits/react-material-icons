import React from 'react'
import { IconProps } from './types'

const IconPhotoAlbumRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm200-200-49-65q-6-8-16.5-8t-16.5 8l-55 74q-7 10-1.5 20.5T319-240h321q12 0 17.5-10.5T656-272l-95-126q-6-8-16-8t-16 8l-89 118Zm0-520v245q0 12 9.5 17.5t20.5-.5l49-29q10-6 20.5-6t20.5 6l49 29q11 6 21 .5t10-17.5v-245H440Z" />
  </svg>
)

export { IconPhotoAlbumRoundedFilled as default }

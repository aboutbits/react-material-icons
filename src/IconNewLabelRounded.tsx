import React from 'react'
import { IconProps } from './types'

const IconNewLabelRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-800q19 0 36 8.5t28 23.5l180 240q16 21 16 48t-16 48L664-192q-11 15-28 23.5t-36 8.5h-80q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240h80l180-240-180-240H160v160q0 17-11.5 28.5T120-520q-17 0-28.5-11.5T80-560v-160q0-33 23.5-56.5T160-800h440ZM240-120q-17 0-28.5-11.5T200-160v-80h-80q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h80v-80q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400v80h80q17 0 28.5 11.5T400-280q0 17-11.5 28.5T360-240h-80v80q0 17-11.5 28.5T240-120Zm230-360Z" />
  </svg>
)

export { IconNewLabelRounded as default }

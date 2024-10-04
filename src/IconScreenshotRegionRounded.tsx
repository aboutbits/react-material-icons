import React from 'react'
import { IconProps } from './types'

const IconScreenshotRegionRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80q17 0 28.5 11.5T400-240q0 17-11.5 28.5T360-200H240q-17 0-28.5-11.5T200-240v-120q0-17 11.5-28.5T240-400q17 0 28.5 11.5T280-360v80Zm0-400v80q0 17-11.5 28.5T240-560q-17 0-28.5-11.5T200-600v-120q0-17 11.5-28.5T240-760h120q17 0 28.5 11.5T400-720q0 17-11.5 28.5T360-680h-80Zm400 0h-80q-17 0-28.5-11.5T560-720q0-17 11.5-28.5T600-760h120q17 0 28.5 11.5T760-720v120q0 17-11.5 28.5T720-560q-17 0-28.5-11.5T680-600v-80Zm0 480h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80Z" />
  </svg>
)

export { IconScreenshotRegionRounded as default }

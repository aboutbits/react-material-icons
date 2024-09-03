import React from 'react'
import { IconProps } from './types'

const IconPhotoFrameRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-17 0-28.5-11.5T200-160v-40h-80q-33 0-56.5-23.5T40-280v-440q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v440q0 33-23.5 56.5T840-200h-80v40q0 17-11.5 28.5T720-120H240ZM120-280h720v-440H120v440Zm121-80h479q12 0 18-11t-2-21L596-579q-6-8-16-8t-16 8L440-420l-84-101q-6-8-15.5-7.5T325-520L225-392q-8 10-2.5 21t18.5 11Zm-121 80v-440 440Z" />
  </svg>
)

export { IconPhotoFrameRounded as default }
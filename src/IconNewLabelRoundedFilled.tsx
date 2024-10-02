import React from 'react'
import { IconProps } from './types'

export const IconNewLabelRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-17 0-28.5-11.5T200-160v-80h-80q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h80v-80q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400v80h80q17 0 28.5 11.5T400-280q0 17-11.5 28.5T360-240h-80v80q0 17-11.5 28.5T240-120Zm208-40q16-27 24-57.5t8-62.5q0-100-70-170t-170-70q-45 0-86 16t-74 45v-261q0-33 23.5-56.5T160-800h440q19 0 36 8.5t28 23.5l180 240q16 21 16 48t-16 48L664-192q-11 15-28 23.5t-36 8.5H448Z" />
  </svg>
)

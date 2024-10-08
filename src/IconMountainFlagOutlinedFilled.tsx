import React from 'react'
import { IconProps } from './types'

const IconMountainFlagOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m281-487 33-68q10-21 29.5-33t42.5-12h54v-280h280l-40 80 40 80H520v120h51q23 0 41.5 12t29.5 32l35 70-120 80-77-39-77 39-122-81ZM80-80l165-335 152 101 83-41 83 41 150-99L880-80H80Z" />
  </svg>
)

export { IconMountainFlagOutlinedFilled as default }

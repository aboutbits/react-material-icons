import React from 'react'
import { IconProps } from './types'

const IconMountainFlagSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-355Zm-132-88 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l256-520h104v-280h280l-40 80 40 80H520v120h100L880-80H80Z" />
  </svg>
)

export { IconMountainFlagSharp as default }

import React from 'react'
import { IconProps } from './types'

const IconVideoCameraBackSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-320h400L462-500l-92 120-62-80-108 140ZM80-160v-640h640v260l160-160v440L720-420v260H80Z" />
  </svg>
)

export { IconVideoCameraBackSharpFilled as default }

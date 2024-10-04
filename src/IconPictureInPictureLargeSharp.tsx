import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureLargeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320v-400h480v400H240ZM80-160v-80h720v-560h80v640H80Z" />
  </svg>
)

export { IconPictureInPictureLargeSharp as default }

import React from 'react'
import { IconProps } from './types'

export const IconPictureInPictureMediumSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320v-320h400v320H320ZM80-160v-80h720v-560h80v640H80Z" />
  </svg>
)

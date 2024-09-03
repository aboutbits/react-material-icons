import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureMobileOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm480-80v-640H240v640h480Zm0-640H240h480ZM440-440h240v-320H440v320Zm80-80v-160h80v160h-80Z" />
  </svg>
)

export { IconPictureInPictureMobileOutlined as default }
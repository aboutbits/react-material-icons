import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureCenterRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm200-120h240q17 0 28.5-11.5T640-400v-160q0-17-11.5-28.5T600-600H360q-17 0-28.5 11.5T320-560v160q0 17 11.5 28.5T360-360ZM160-240v-480 480Z" />
  </svg>
)

export { IconPictureInPictureCenterRounded as default }

import React from 'react'
import { IconProps } from './types'

const IconCameraOutdoorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240v-240h240v80l80-42v164l-80-42v80H480ZM160-120v-480l320-240 320 240v80h-80v-40L480-740 240-560v360h560v80H160Zm320-350Z" />
  </svg>
)

export { IconCameraOutdoorSharp as default }

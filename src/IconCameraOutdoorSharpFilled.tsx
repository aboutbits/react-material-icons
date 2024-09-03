import React from 'react'
import { IconProps } from './types'

const IconCameraOutdoorSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v80H440v320h360v80H160Zm320-120v-240h240v80l80-42v164l-80-42v80H480Z" />
  </svg>
)

export { IconCameraOutdoorSharpFilled as default }

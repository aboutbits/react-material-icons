import React from 'react'
import { IconProps } from './types'

const IconSdCardOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-480l240-240h320q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm120-440h80v-160h-80v160Zm120 0h80v-160h-80v160Zm120 0h80v-160h-80v160Z" />
  </svg>
)

export { IconSdCardOutlinedFilled as default }

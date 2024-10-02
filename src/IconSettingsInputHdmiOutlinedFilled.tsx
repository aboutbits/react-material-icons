import React from 'react'
import { IconProps } from './types'

export const IconSettingsInputHdmiOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80v-120L200-440v-240h40v-120q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v120h40v240L640-200v120H320Zm0-600h80v-80h40v80h80v-80h40v80h80v-120H320v120Z" />
  </svg>
)

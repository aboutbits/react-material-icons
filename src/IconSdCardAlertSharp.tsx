import React from 'react'
import { IconProps } from './types.js'

export const IconSdCardAlertSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280h80v-80h-80v80Zm0-160h80v-200h-80v200ZM800-80H160v-560l240-240h400v800Zm-80-80v-640H434L240-606v446h480Zm0 0v-640 640Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconSdCardAlertRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l194-194q11-11 25.5-17t30.5-6h287q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H434L240-606v446Zm240-120q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480v-120q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v120q0 17 11.5 28.5T480-440ZM240-160h480-480Z" />
  </svg>
)

export { IconSdCardAlertRounded as default }

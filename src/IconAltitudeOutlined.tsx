import React from 'react'
import { IconProps } from './types'

const IconAltitudeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-480v-168l-64 64-56-56 160-160 160 160-56 57-64-64v167h-80ZM40-80l240-320 180 240h300L560-426 460-294l-50-66 150-200L920-80H40Zm420-80Z" />
  </svg>
)

export { IconAltitudeOutlined as default }
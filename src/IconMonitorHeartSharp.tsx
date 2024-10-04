import React from 'react'
import { IconProps } from './types'

const IconMonitorHeartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-600v-200h800v200h-80v-120H160v120H80Zm0 440v-200h80v120h640v-120h80v200H80Zm215-280 78 156h54l133-266 55 110h265v-80H665l-78-156h-54L400-410l-55-110H80v80h215Zm185-40Z" />
  </svg>
)

export { IconMonitorHeartSharp as default }

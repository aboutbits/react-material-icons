import React from 'react'
import { IconProps } from './types'

const IconPowerInputSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-360v-80h200v80H80Zm0-160v-80h760v80H80Zm280 160v-80h200v80H360Zm280 0v-80h200v80H640Z" />
  </svg>
)

export { IconPowerInputSharp as default }

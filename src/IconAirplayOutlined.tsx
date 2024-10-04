import React from 'react'
import { IconProps } from './types'

const IconAirplayOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-120 240-240 240 240H240ZM80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H680v-80h120v-480H160v480h120v80H160q-33 0-56.5-23.5T80-280Zm400-200Z" />
  </svg>
)

export { IconAirplayOutlined as default }

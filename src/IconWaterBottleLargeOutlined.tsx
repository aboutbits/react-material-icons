import React from 'react'
import { IconProps } from './types'

const IconWaterBottleLargeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160h400v-80h-80v-280h-80v-80h160v-80H280v80h80v280h80v80H280v80Zm0 80q-33 0-56.5-23.5T200-160v-80q0-33 23.5-56.5T280-320v-200q-33 0-56.5-23.5T200-600v-80q0-33 23.5-56.5T280-760h120v-40h-40v-80h240v80h-40v40h120q33 0 56.5 23.5T760-680v80q0 33-23.5 56.5T680-520v200q33 0 56.5 23.5T760-240v80q0 33-23.5 56.5T680-80H280Zm200-340Z" />
  </svg>
)

export { IconWaterBottleLargeOutlined as default }

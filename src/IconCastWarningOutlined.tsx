import React from 'react'
import { IconProps } from './types'

export const IconCastWarningOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480ZM80-280q50 0 85 35t35 85H80v-120Zm0-160q117 0 198.5 81.5T360-160h-80q0-83-58.5-141.5T80-360v-80Zm0-160q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80Zm720 440H600q0-20-1.5-40t-4.5-40h206v-212q22-7 42-16.5t38-22.5v251q0 33-23.5 56.5T800-160ZM80-680v-40q0-33 23.5-56.5T160-800h292q-6 19-9 39t-3 41H160v46q-20-3-40-4.5T80-680Zm640 160q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160Z" />
  </svg>
)

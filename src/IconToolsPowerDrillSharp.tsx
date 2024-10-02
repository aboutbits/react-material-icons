import React from 'react'
import { IconProps } from './types'

export const IconToolsPowerDrillSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-200h240v-40H240v40Zm0-360h240v-60H240v60Zm0-100h240v-60H240v60Zm400 140v-80h80v-80h-80v-80h120l40 40v40h120v80H800v40l-40 40H640ZM480-320h-80v-200h160v-240H240q-33 0-56.5 23.5T160-680v80q0 33 23.5 56.5T240-520h80v200h-80v-120q-66 0-113-47T80-600v-80q0-66 47-113t113-47h400v400H480v120ZM160-120v-200h400v200H160Zm200-520Zm120 440H240h240Z" />
  </svg>
)

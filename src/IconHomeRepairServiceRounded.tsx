import React from 'react'
import { IconProps } from './types'

const IconHomeRepairServiceRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400ZM80-200v-360q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v360q0 17-11.5 28.5T840-160H120q-17 0-28.5-11.5T80-200Zm240-160q0 17-11.5 28.5T280-320q-17 0-28.5-11.5T240-360h-80v120h640v-120h-80q0 17-11.5 28.5T680-320q-17 0-28.5-11.5T640-360H320ZM160-560v120h80q0-17 11.5-28.5T280-480q17 0 28.5 11.5T320-440h320q0-17 11.5-28.5T680-480q17 0 28.5 11.5T720-440h80v-120H160Zm200-80h240v-80H360v80Z" />
  </svg>
)

export { IconHomeRepairServiceRounded as default }

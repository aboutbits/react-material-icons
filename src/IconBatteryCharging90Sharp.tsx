import React from 'react'
import { IconProps } from './types'

const IconBatteryCharging90Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-720h120v-80h160v80h120v320q-100 1-170 70.5T440-240q0 46 16 87t45 73H280Zm80-560h240v-80H360v80ZM660-80v-120H560l140-200v120h100L660-80Z" />
  </svg>
)

export { IconBatteryCharging90Sharp as default }
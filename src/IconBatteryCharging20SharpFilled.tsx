import React from 'react'
import { IconProps } from './types'

const IconBatteryCharging20SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-80v-120H560l140-200v120h100L660-80Zm-380 0v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v480h80q0 46 16 87t45 73H280Z" />
  </svg>
)

export { IconBatteryCharging20SharpFilled as default }

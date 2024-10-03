import React from 'react'
import { IconProps } from './types.js'

export const IconBatteryCharging20OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-80v-120H560l140-200v120h100L660-80Zm-340 0q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v280q-21 0-41 3.5T600-466v-254H360v480h80q0 46 16 87t45 73H320Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconBatteryStatusGoodSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M638-113 524-226l57-56 57 56 141-141 57 56-198 198Zm-278-47Zm-80 80v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H280Z" />
  </svg>
)

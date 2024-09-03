import React from 'react'
import { IconProps } from './types'

const IconBatteryChangeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-80h240v-560H360v560Zm0 0h240-240Zm110-94 57-56-38-38q-5-5-7-10.5t-2-11.5q0-7 2-12.5t7-10.5l38-38q16-16 24.5-36t8.5-42q0-23-8.5-43.5T527-589l-38-38-56 57 37 37q5 5 7.5 10.5T480-510q0 6-2.5 11.5T470-488l-37 38q-16 16-24.5 36t-8.5 43q0 23 8.5 43.5T433-291l37 37Z" />
  </svg>
)

export { IconBatteryChangeSharp as default }

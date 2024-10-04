import React from 'react'
import { IconProps } from './types'

const IconBatteryErrorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-720h120v-80h160v80h120v348q-22 6-42 15.5T600-414v-306H360v560h148q5 22 14.5 42T545-80H280Zm80-80Zm296 80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z" />
  </svg>
)

export { IconBatteryErrorSharp as default }

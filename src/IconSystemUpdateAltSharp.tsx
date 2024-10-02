import React from 'react'
import { IconProps } from './types'

export const IconSystemUpdateAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h280v80H160v480h640v-480H600v-80h280v640H80Zm400-184L280-544l56-56 104 104v-304h80v304l104-104 56 56-200 200Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconBlenderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-190l74-84-25-166H120v-320h280v-40h160v40h159l-73 486 74 84v190H240Zm37-520-24-160h-53v160h77Zm203 400q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm-92-200h184l54-360H334l54 360Zm-68 240h320v-80l-71-80H391l-71 80v80Zm160-80Z" />
  </svg>
)

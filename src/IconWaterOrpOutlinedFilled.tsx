import React from 'react'
import { IconProps } from './types.js'

export const IconWaterOrpOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-80q-17 0-28.5-11.5T260-120v-160q0-17 11.5-28.5T300-320h100q17 0 28.5 11.5T440-280v160q0 17-11.5 28.5T400-80H300Zm20-60h60v-120h-60v120Zm160 60v-240h140q25 0 42.5 17.5T680-260v40q0 18-10 33t-26 23l36 84h-60l-34-80h-46v80h-60Zm240 0v-240h140q25 0 42.5 17.5T920-260v40q0 25-17.5 42.5T860-160h-80v80h-60ZM540-220h80v-40h-80v40Zm240 0h80v-40h-80v40Zm-600 54q-47-45-73.5-107T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v8H260q-33 0-56.5 23.5T180-320v154Z" />
  </svg>
)
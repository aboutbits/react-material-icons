import React from 'react'
import { IconProps } from './types'

export const IconVisibilityLockSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q141 0 257.5 76T912-520h-91q-52-93-143-146.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q20 0 40-2t40-6v81q-20 3-40 5t-40 2Zm0-120q22 0 42.5-5t38.5-14q5-50 31.5-90t67.5-64v-7q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm-5-180Zm165 380v-200h40v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
  </svg>
)

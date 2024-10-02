import React from 'react'
import { IconProps } from './types'

export const IconFeatureSearchSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m772-604 128 128-56 56-128-128q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-700q0-75 52.5-127.5T620-880q75 0 127.5 52.5T800-700q0 27-8 51t-20 45Zm-152 4q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM80-80v-720h300q-11 25-15 51.5t-4 52.5q0 109 77 182t183 73q19 0 38-2.5t39-8.5l102 102v270H80Z" />
  </svg>
)

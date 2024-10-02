import React from 'react'
import { IconProps } from './types'

export const IconFolderEyeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v176q0 23-20.5 33.5T819-432q-42-23-86.5-35.5T640-480q-134 0-235.5 85T261-187q-4 12-14 19.5t-22 7.5h-65ZM640-40q-79 0-147.5-36T382-178q-6-9-9-19.5t-3-21.5q0-11 3-22t9-21q42-66 110.5-102T640-400q79 0 147.5 36T898-262q6 10 9 20.5t3 21.5q0 11-3 21.5t-9 20.5q-42 66-110.5 102T640-40Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0-40q-25 0-42.5-17.5T580-220q0-25 17.5-42.5T640-280q25 0 42.5 17.5T700-220q0 25-17.5 42.5T640-160Z" />
  </svg>
)

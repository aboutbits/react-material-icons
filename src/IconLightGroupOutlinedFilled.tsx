import React from 'react'
import { IconProps } from './types.js'

export const IconLightGroupOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-80h320v80H120Zm560-40q-33 0-56.5-23.5T600-200H480q-17 0-28.5-11.5T440-240q-2-90 56-156t144-80v-404h80v404q87 14 144.5 80T920-240q0 17-11.5 28.5T880-200H760q0 33-23 56.5T680-120Zm-440-80v-320H80q-20 0-31.5-15.5T42-570l75-280q4-13 14.5-21.5T156-880h249q14 0 24.5 8.5T444-850l75 280q5 19-6.5 34.5T481-520H320v320h-80Z" />
  </svg>
)

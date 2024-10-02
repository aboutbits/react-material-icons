import React from 'react'
import { IconProps } from './types'

export const IconRsvpOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-360v-240h140q25 0 42.5 17.5T240-540v40q0 18-10.5 33T204-444l36 84h-60l-34-80h-46v80H40Zm240 0v-60h120v-30h-80q-17 0-28.5-11.5T280-490v-70q0-17 11.5-28.5T320-600h140v60H340v30h80q17 0 28.5 11.5T460-470v70q0 17-11.5 28.5T420-360H280Zm290 0-70-240h60l40 137 40-137h60l-70 240h-60Zm150 0v-240h140q25 0 42.5 17.5T920-540v40q0 25-17.5 42.5T860-440h-80v80h-60ZM100-500h80v-40h-80v40Zm680 0h80v-40h-80v40Z" />
  </svg>
)

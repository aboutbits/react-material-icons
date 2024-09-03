import React from 'react'
import { IconProps } from './types'

const IconRangeHoodOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M122-480h718L680-640v-200H280v200L122-480Zm38 320h640q33 0 56.5-23.5T880-240v-160H80v160q0 33 23.5 56.5T160-160Zm240-132v-60h160v60H400Z" />
  </svg>
)

export { IconRangeHoodOutlinedFilled as default }

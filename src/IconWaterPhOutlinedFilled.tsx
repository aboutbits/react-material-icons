import React from 'react'
import { IconProps } from './types'

const IconWaterPhOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80v-240h140q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v80h-60Zm240 0v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60ZM500-220h80v-40h-80v40ZM360-82Q238-96 159-187T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v8H440q-33 0-56.5 23.5T360-320v238Z" />
  </svg>
)

export { IconWaterPhOutlinedFilled as default }

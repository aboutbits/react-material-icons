import React from 'react'
import { IconProps } from './types.js'

export const IconBoltOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z" />
  </svg>
)

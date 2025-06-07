import React from 'react'
import { IconProps } from './types.js'

export const IconBikeDockSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80l170-49 70-591h240l70 591 170 49v80H120Zm320-120h80v-520h-80v520Z" />
  </svg>
)

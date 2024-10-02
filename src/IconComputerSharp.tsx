import React from 'react'
import { IconProps } from './types'

export const IconComputerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm80-80h640v-440H160v440Zm0 0v-440 440Z" />
  </svg>
)

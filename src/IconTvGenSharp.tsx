import React from 'react'
import { IconProps } from './types'

export const IconTvGenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80H80v-600h800v600h-80v80h-40l-26-80H227l-27 80h-40Zm0-160h640v-440H160v440Zm320-220Z" />
  </svg>
)

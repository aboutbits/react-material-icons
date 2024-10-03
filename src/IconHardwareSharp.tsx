import React from 'react'
import { IconProps } from './types.js'

export const IconHardwareSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-640H160q0-83 58.5-141.5T360-840h240v120l120-120h80v320h-80L600-640v520H360v-520Zm80 440h80v-240h-80v240Zm0-320h80v-240H360q-26 0-49 10.5T271-720h169v200Zm40 40Z" />
  </svg>
)

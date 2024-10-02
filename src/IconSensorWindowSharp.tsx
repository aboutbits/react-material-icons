import React from 'react'
import { IconProps } from './types'

export const IconSensorWindowSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm80-440h160v-40h160v40h160v-280H240v280Zm0 80v280h480v-280H240Zm0 280h480-480Z" />
  </svg>
)

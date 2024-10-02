import React from 'react'
import { IconProps } from './types'

export const IconFloorLampSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200v-320H186l111-360h366l111 360H520v320h-80ZM294-600h372l-62-200H356l-62 200Zm26 520v-80h320v80H320Zm160-620Z" />
  </svg>
)

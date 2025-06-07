import React from 'react'
import { IconProps } from './types.js'

export const IconViewCarouselSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-400h160v400H80Zm200 80v-560h400v560H280Zm440-80v-400h160v400H720Zm-360 0h240v-400H360v400Zm120-200Z" />
  </svg>
)

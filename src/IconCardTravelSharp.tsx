import React from 'react'
import { IconProps } from './types'

export const IconCardTravelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200h640v-80H160v80Zm-80 80v-600h200v-160h400v160h200v600H80Zm80-280h640v-240H680v80h-80v-80H360v80h-80v-80H160v240Zm200-320h240v-80H360v80ZM160-200v-440 80-80 80-80 440Z" />
  </svg>
)

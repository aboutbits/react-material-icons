import React from 'react'
import { IconProps } from './types'

export const IconChurchSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-320l160-71v-129l200-100v-60h-80v-80h80v-80h80v80h80v80h-80v60l200 100v129l160 71v320H520v-200h-80v200H80Zm80-80h200v-204h240v204h200v-192l-160-72v-134l-160-82-160 82v134l-160 72v192Zm320-260q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm0 20Z" />
  </svg>
)

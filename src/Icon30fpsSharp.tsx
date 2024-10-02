import React from 'react'
import { IconProps } from './types'

export const Icon30fpsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-120h240v-100H80v-120h240v-100H80v-120h360v220l-60 60 60 60v220H80Zm520-120h160v-320H600v320ZM480-200v-560h400v560H480Z" />
  </svg>
)

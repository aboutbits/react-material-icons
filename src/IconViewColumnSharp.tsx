import React from 'react'
import { IconProps } from './types'

export const IconViewColumnSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M121-200v-560h719v560H121Zm79-80h133v-400H200v400Zm213 0h133v-400H413v400Zm213 0h133v-400H626v400Z" />
  </svg>
)

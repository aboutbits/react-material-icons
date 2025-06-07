import React from 'react'
import { IconProps } from './types.js'

export const IconMergeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m256-120-56-56 240-241v-270l-64 63-56-56 160-160 160 160-56 56-64-63v270l240 241-56 56-224-224-224 224Z" />
  </svg>
)

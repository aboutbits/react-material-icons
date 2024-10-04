import React from 'react'
import { IconProps } from './types.js'

export const IconRampLeftSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-567l-64 63-56-56 160-160 160 160-56 56-64-63v87q0 64 26.5 117.5t64 95Q648-346 689-316t71 47l-58 58q-57-35-103-75.5T520-372v252h-80Z" />
  </svg>
)
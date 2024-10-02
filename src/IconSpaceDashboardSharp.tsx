import React from 'react'
import { IconProps } from './types'

export const IconSpaceDashboardSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z" />
  </svg>
)

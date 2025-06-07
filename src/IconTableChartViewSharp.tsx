import React from 'react'
import { IconProps } from './types.js'

export const IconTableChartViewSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m296-80-56-56 276-277 140 140 207-207 57 57-264 263-140-140L296-80Zm-136-40H80v-720h720v280H160v440Zm0-520h560v-120H160v120Zm0 0v-120 120Z" />
  </svg>
)

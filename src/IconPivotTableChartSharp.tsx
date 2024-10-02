import React from 'react'
import { IconProps } from './types'

export const IconPivotTableChartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-640v-200h440v200H400ZM120-120v-440h200v440H120Zm0-520v-200h200v200H120ZM520-80 360-240l160-160 56 56-62 64h166v-168l-64 64-56-56 160-160 160 160-56 56-64-64v248H514l62 64-56 56Z" />
  </svg>
)

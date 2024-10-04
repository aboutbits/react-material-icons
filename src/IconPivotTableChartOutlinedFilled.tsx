import React from 'react'
import { IconProps } from './types.js'

export const IconPivotTableChartOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-640v-200h360q33 0 56.5 23.5T840-760v120H400ZM200-120q-33 0-56.5-23.5T120-200v-360h200v440H200Zm-80-520v-120q0-33 23.5-56.5T200-840h120v200H120ZM520-80 360-240l160-160 56 56-62 64h86q33 0 56.5-23.5T680-360v-88l-64 64-56-56 160-160 160 160-56 56-64-64v88q0 66-47 113t-113 47h-86l62 64-56 56Z" />
  </svg>
)
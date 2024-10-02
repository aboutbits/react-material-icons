import React from 'react'
import { IconProps } from './types'

export const IconMonitorWeightGainSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM200-200v-560 560Zm-80 80v-720h720v400h-80v-320H200v560h320v80H120Zm360-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80-100v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z" />
  </svg>
)

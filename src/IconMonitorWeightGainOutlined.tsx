import React from 'react'
import { IconProps } from './types.js'

export const IconMonitorWeightGainOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-360h80v120h120v80H800v120h-80v-120H600v-80h120v-120ZM200-200v-560 560Zm280-520q-50 0-85 35t-35 85q0 50 35 85t85 35q50 0 85-35t35-85q0-50-35-85t-85-35Zm-60 100q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm60 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm60 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v320h-80v-320H200v560h320v80H200Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

export const IconPediatricsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-680v-80h160v-120h80v120h160v80H280Zm80 600q-33 0-56.5-23.5T280-160v-80h200v-80H280v-80h200v-80H280v-40q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600-80H360Z" />
  </svg>
)

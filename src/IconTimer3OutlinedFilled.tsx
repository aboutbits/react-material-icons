import React from 'react'
import { IconProps } from './types'

export const IconTimer3OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-120h240v-100H360v-120h200v-100H320v-120h240q50 0 85 35t35 85v76q0 35-24.5 59.5T596-480q35 0 59.5 24.5T680-396v76q0 50-35 85t-85 35H320Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const Icon30fpsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-120h240v-100H80v-120h240v-100H80v-120h240q50 0 85 35t35 85v76q0 35-24.5 59.5T356-480q35 0 59.5 24.5T440-396v76q0 50-35 85t-85 35H80Zm520-120h160v-320H600v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h160q50 0 85 35t35 85v320q0 50-35 85t-85 35H600Z" />
  </svg>
)
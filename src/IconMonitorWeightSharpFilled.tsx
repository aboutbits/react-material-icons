import React from 'react'
import { IconProps } from './types'

const IconMonitorWeightSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm360-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80-100v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z" />
  </svg>
)

export { IconMonitorWeightSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconMarkEmailUnreadSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-640h484q-4 20-4 40t4 40q7 32 23 59.5t39 48.5l-146 92-320-200v80l320 200 211-132q17 6 34 9t35 3q32 0 63-10t57-30v440H80Z" />
  </svg>
)

export { IconMarkEmailUnreadSharpFilled as default }

import React from 'react'
import { IconProps } from './types'

const IconEmergencyRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M20.29,8.37l-1-1.73c-0.28-0.48-0.89-0.64-1.37-0.37L14,8.54V4c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v4.54L6.07,6.27 C5.59,5.99,4.98,6.16,4.71,6.63l-1,1.73C3.43,8.84,3.59,9.46,4.07,9.73L8,12l-3.93,2.27c-0.48,0.28-0.64,0.89-0.37,1.37l1,1.73 c0.28,0.48,0.89,0.64,1.37,0.37L10,15.46V20c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-4.54l3.93,2.27c0.48,0.28,1.09,0.11,1.37-0.37 l1-1.73c0.28-0.48,0.11-1.09-0.37-1.37L16,12l3.93-2.27C20.41,9.46,20.57,8.84,20.29,8.37z" />
  </svg>
)

export { IconEmergencyRound as default }

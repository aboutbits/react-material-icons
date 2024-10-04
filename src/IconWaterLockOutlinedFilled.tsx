import React from 'react'
import { IconProps } from './types'

const IconWaterLockOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM760-80q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l74-83 74 83q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v164q-11-2-21-3t-21-1q-82 0-140 58t-58 141q0 33 10 64t31 57H240Z" />
  </svg>
)

export { IconWaterLockOutlinedFilled as default }

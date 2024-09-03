import React from 'react'
import { IconProps } from './types'

const IconWaterLockRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l52-58q9-10 22-10t22 10l52 58q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm120 360q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v134q0 12-9 19.5t-21 6.5q-54-3-101 21t-76 69q-29 45-33 97.5T580-112q5 11 0 21.5T564-80H240Z" />
  </svg>
)

export { IconWaterLockRoundedFilled as default }

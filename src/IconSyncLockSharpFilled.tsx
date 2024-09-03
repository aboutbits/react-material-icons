import React from 'react'
import { IconProps } from './types'

const IconSyncLockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-80h109q-51-44-80-106t-29-134q0-112 68-197.5T400-790v84q-70 25-115 86.5T240-480q0 54 21.5 99.5T320-302v-98h80v240H160Zm560-320q0-51-20.5-95.5T640-658v98h-80v-240h240v80H691q59 53 83.5 113.5T800-480h-80ZM600-80v-200h40v-40q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320v40Z" />
  </svg>
)

export { IconSyncLockSharpFilled as default }

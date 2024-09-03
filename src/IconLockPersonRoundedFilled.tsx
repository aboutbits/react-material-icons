import React from 'react'
import { IconProps } from './types'

const IconLockPersonRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v6q0 17-13.5 28t-31.5 8q-8-1-17-1.5t-18-.5q-116 0-198 82t-82 198q0 30 6.5 58t17.5 54q8 17-1.5 32.5T436-80H240Zm480 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm360 400q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-173q17 25 43 39t56 14Z" />
  </svg>
)

export { IconLockPersonRoundedFilled as default }

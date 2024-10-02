import React from 'react'
import { IconProps } from './types'

export const IconBloodPressureSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v220h-80v-220H160v120H80Zm347 440H160q-33 0-56.5-23.5T80-240v-120h80v120h243q3 21 9 41t15 39Zm53-320ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm8-180 91-91-28-28-91 91 28 28ZM80-440v-80h144l56 111 134-271h51l78 156q-18 11-34.5 23T478-474l-38-76-135 270h-50l-80-160H80Z" />
  </svg>
)

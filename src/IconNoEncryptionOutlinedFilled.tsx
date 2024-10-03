import React from 'react'
import { IconProps } from './types.js'

export const IconNoEncryptionOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-274 434-640h166v-80q0-50-34.5-85T481-840q-50 0-84 35t-34 85v9l-73-73q22-61 74-98.5T481-920q83 0 141 58.5T680-720v80h40q33 0 56.5 23.5T800-560v286Zm20 246-62-62q-9 5-18.5 7.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-26 14.5-46.5T212-636L28-820l56-56L876-84l-56 56ZM425-423q-11 12-17 26.5t-6 30.5q0 33 23.5 56.5T482-286q16 0 30.5-6t26.5-17L425-423Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types'

const IconLocalMallSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-640h160q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h160v640H120Zm360-320q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85Z" />
  </svg>
)

export { IconLocalMallSharpFilled as default }

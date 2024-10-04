import React from 'react'
import { IconProps } from './types'

const IconBluetoothSearchingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80v-304L176-200l-56-56 224-224-224-224 56-56 184 184v-304h40l228 228-172 172 172 172L400-80h-40Zm80-496 76-76-76-74v150Zm0 342 76-74-76-76v150Zm222-152-92-94 92-92q9 22 14.5 45t5.5 47q0 24-5.5 47.5T662-386Zm118 114-50-48q20-37 31-77.5t11-82.5q0-42-11-82.5T730-640l50-50q29 48 44.5 101T840-480q0 56-15.5 108.5T780-272Z" />
  </svg>
)

export { IconBluetoothSearchingSharp as default }

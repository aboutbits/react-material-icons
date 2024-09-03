import React from 'react'
import { IconProps } from './types'

const IconContrastSquareOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560L200-200Zm481-120H481v-60h200v60ZM220-600h80v80h60v-80h80v-60h-80v-80h-60v80h-80v60Z" />
  </svg>
)

export { IconContrastSquareOutlined as default }
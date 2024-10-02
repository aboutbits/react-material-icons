import React from 'react'
import { IconProps } from './types'

export const Icon9kPlusOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h140q17 0 28.5-11.5T420-400v-160q0-17-11.5-28.5T380-600H280q-17 0-28.5 11.5T240-560v60q0 17 11.5 28.5T280-460h80v40H240v60Zm60-140v-60h60v60h-60Zm140 140h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)

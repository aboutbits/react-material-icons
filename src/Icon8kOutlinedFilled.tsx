import React from 'react'
import { IconProps } from './types'

const Icon8kOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-220 0h100q17 0 28.5-11.5T440-400v-160q0-17-11.5-28.5T400-600H300q-17 0-28.5 11.5T260-560v160q0 17 11.5 28.5T300-360Zm20-140v-60h60v60h-60Zm0 100v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { Icon8kOutlinedFilled as default }

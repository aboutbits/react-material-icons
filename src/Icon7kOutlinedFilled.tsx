import React from 'react'
import { IconProps } from './types'

const Icon7kOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-210 0h70l58-188q6-20-6-36t-32-16H260v60h106l-56 180ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { Icon7kOutlinedFilled as default }

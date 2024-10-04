import React from 'react'
import { IconProps } from './types.js'

export const Icon6kPlusOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-360h80q17 0 28.5-11.5T400-400v-60q0-17-11.5-28.5T360-500h-60v-40h100v-60H280q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm20-40v-60h40v60h-40Zm140 40h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconScoreOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-360h60v-240h-60v240Zm140 0h68l-80-120 80-120h-68l-80 120 80 120Zm-340 0h160v-60H340v-30h100v-150H280v60h100v30H280v150Zm480 40v-100L520-300 360-460 200-300v100l160-160 160 160 240-240Z" />
  </svg>
)

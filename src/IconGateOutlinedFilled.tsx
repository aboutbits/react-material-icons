import React from 'react'
import { IconProps } from './types.js'

export const IconGateOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-400q0-66 47-113t113-47h80v240h-80v80h80v240H200Zm320 0v-240h80v-80h-80v-240h80q66 0 113 47t47 113v400H520ZM80-280v-400h80v400H80Zm720 0v-400h80v400h-80Z" />
  </svg>
)

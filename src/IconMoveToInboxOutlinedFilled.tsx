import React from 'react'
import { IconProps } from './types.js'

export const IconMoveToInboxOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-200q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Zm0-80L320-560l56-58 64 64v-166h80v166l64-64 56 58-160 160Z" />
  </svg>
)

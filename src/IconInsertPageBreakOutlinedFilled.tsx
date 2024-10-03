import React from 'react'
import { IconProps } from './types.js'

export const IconInsertPageBreakOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-120h640v120q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200ZM360-360v-80h240v80H360Zm320 0v-80h240v80H680Zm-640 0v-80h240v80H40Zm120-160v-280q0-33 23.5-56.5T240-880h320l240 240v120H160Z" />
  </svg>
)

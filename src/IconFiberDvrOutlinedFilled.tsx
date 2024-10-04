import React from 'react'
import { IconProps } from './types.js'

export const IconFiberDvrOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-360h140q26 0 43-17t17-43v-120q0-26-17-43t-43-17H160v240Zm60-60v-120h80v120h-80Zm224 60h60l70-240h-60l-40 138-40-138h-60l70 240Zm156 0h60v-80h46l34 80h60l-36-84q15-8 25.5-23t10.5-33v-40q0-26-17-43t-43-17H600v240Zm60-140v-40h80v40h-80ZM120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Z" />
  </svg>
)
import React from 'react'
import { IconProps } from './types.js'

export const IconLocalPostOfficeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-200v120H80v-400h160v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v560h-80v-120H640Zm0-80h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h320v200Zm-280-6 200-114H160l200 114Zm0 70L160-330v170h400v-170L360-216ZM160-400v240-240Zm240-160v-80h320v80H400Z" />
  </svg>
)

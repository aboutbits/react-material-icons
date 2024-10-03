import React from 'react'
import { IconProps } from './types.js'

export const IconLocalPostOfficeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-400h160v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v560h-80v-120H640v120H80Zm280-206L160-400v70l200 114 200-114v-70L360-286Zm280 6h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h320v200ZM400-560v-80h320v80H400Z" />
  </svg>
)

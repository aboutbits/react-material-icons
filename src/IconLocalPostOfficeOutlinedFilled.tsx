import React from 'react'
import { IconProps } from './types'

export const IconLocalPostOfficeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-17 0-28.5-11.5T80-120v-320q0-17 11.5-28.5T120-480h120v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v560h-80v-120H640v80q0 17-11.5 28.5T600-80H120Zm240-136 200-114v-70L360-286 160-400v70l200 114Zm280-64h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h280q17 0 28.5 11.5T640-440v160ZM400-560v-80h320v80H400Z" />
  </svg>
)

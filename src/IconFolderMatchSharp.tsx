import React from 'react'
import { IconProps } from './types'

export const IconFolderMatchSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-184q-81-32-133.5-100.5T163-440h81q9 53 39 97t77 71v88Zm80 104v-360h180l40 60h220v300H440ZM80-520v-360h180l40 60h220v300H80Zm640 40q0-65-32-120.5T600-688v-88q91 37 145.5 117.5T800-480h-80ZM520-160h280v-140H617l-40-60h-57v200ZM160-600h280v-140H257l-40-60h-57v200Zm360 440v-200 200ZM160-600v-200 200Z" />
  </svg>
)

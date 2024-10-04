import React from 'react'
import { IconProps } from './types.js'

export const IconCodeBlocksRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m353-480 59-59q12-12 12-28t-12-28q-12-12-28.5-12T355-595l-87 87q-6 6-8.5 13t-2.5 15q0 8 2.5 15t8.5 13l87 87q12 12 28.5 12t28.5-12q12-12 12-28t-12-28l-59-59Zm254 0-59 59q-12 12-12 28t12 28q12 12 28.5 12t28.5-12l87-87q6-6 8.5-13t2.5-15q0-8-2.5-15t-8.5-13l-87-87q-6-6-13.5-9t-15-3q-7.5 0-15 3t-13.5 9q-12 12-12 28t12 28l59 59ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)

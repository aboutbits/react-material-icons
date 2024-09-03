import React from 'react'
import { IconProps } from './types'

const IconEscalatorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M220-240h192l200-360h128v-120H548L348-360H220v120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
)

export { IconEscalatorSharp as default }

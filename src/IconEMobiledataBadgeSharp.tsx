import React from 'react'
import { IconProps } from './types'

const IconEMobiledataBadgeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h320v-80H400v-80h200v-80H400v-80h240v-80H320v400ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)

export { IconEMobiledataBadgeSharp as default }

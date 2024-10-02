import React from 'react'
import { IconProps } from './types'

export const IconMobileOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 28-820l56-56L876-84l-56 56ZM200-703l80 80v383h384l96 96v24q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-583Zm80 543v40h400v-40H280Zm73-560-79-80h406v-40H234l-28-28q10-23 29.5-37.5T280-920h400q33 0 56.5 23.5T760-840v526l-80-80v-326H353Zm127 560Zm-23-640Z" />
  </svg>
)

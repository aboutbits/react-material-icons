import React from 'react'
import { IconProps } from './types'

const IconSheetsRtlSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-440v-480h640v480H160Zm80-280h200v-120H240v120Zm280 0h200v-120H520v120ZM240-520h200v-120H240v120Zm280 0h200v-120H520v120ZM280-80 120-240l160-160 56 56-63 64h527v80H273l63 64-56 56Z" />
  </svg>
)

export { IconSheetsRtlSharp as default }
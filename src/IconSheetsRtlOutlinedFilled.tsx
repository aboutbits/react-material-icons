import React from 'react'
import { IconProps } from './types'

const IconSheetsRtlOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M220-440q-25 0-42.5-17.5T160-500v-360q0-25 17.5-42.5T220-920h520q25 0 42.5 17.5T800-860v360q0 25-17.5 42.5T740-440H220Zm20-280h200v-120H240v120Zm280 0h200v-120H520v120Zm-80 200v-120H240v120h200Zm80 0h200v-120H520v120ZM280-80 120-240l160-160 56 56-63 64h527v80H273l63 64-56 56Z" />
  </svg>
)

export { IconSheetsRtlOutlinedFilled as default }

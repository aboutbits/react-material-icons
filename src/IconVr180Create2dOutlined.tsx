import React from 'react'
import { IconProps } from './types'

const IconVr180Create2dOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-250q-107-27-173.5-113.5T80-560q0-134 93-227t227-93q110 0 196.5 66.5T710-640h-84q-26-72-87.5-116T400-800q-100 0-170 70t-70 170q0 77 44 138.5T320-334v84ZM480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80h320v-320H480v320Zm20-40h280l-92-120-68 90-48-66-72 96Zm140-120ZM393-567Z" />
  </svg>
)

export { IconVr180Create2dOutlined as default }
import React from 'react'
import { IconProps } from './types'

export const IconNoAdultContentOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q56 0 105.5-17.5T676-227L543-360h113l76 76q32-41 50-90.5T800-480q0-133-93.5-226.5T480-800q-56 0-105.5 18T284-732l133 132H304l-76-76q-32 41-50 90.5T160-480q0 133 93.5 226.5T480-160ZM200-400l60-80-60-80h60l30 40 30-40h60l-60 80 60 80h-60l-30-40-30 40h-60Zm190 0 60-80-60-80h60l30 40 30-40h60l-60 80 60 80h-60l-30-40-30 40h-60Zm190 0 60-80-60-80h60l30 40 30-40h60l-60 80 60 80h-60l-30-40-30 40h-60Z" />
  </svg>
)

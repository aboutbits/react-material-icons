import React from 'react'
import { IconProps } from './types'

const IconDisplayExternalInputOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m720-80-57-57 64-63H560v-80h167l-63-64 56-56 160 160L720-80Zm-520-40q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm-80-480v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80Z" />
  </svg>
)

export { IconDisplayExternalInputOutlined as default }
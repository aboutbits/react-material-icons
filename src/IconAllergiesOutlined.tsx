import React from 'react'
import { IconProps } from './types'

const IconAllergiesOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-240h80v-290l-84-168-72 36 76 152v270Zm120 0h80v-270l76-152-72-36-84 168v290Zm176-182 80-160-72-36-80 160 72 36Zm-392 0 72-36-80-160-72 36 80 160ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
)

export { IconAllergiesOutlined as default }
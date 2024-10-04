import React from 'react'
import { IconProps } from './types'

const IconOutletOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-480q17 0 28.5-11.5T400-520v-120q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640v120q0 17 11.5 28.5T360-480Zm40 240h160v-80q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v80Zm200-240q17 0 28.5-11.5T640-520v-120q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640v120q0 17 11.5 28.5T600-480ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
)

export { IconOutletOutlined as default }

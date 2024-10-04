import React from 'react'
import { IconProps } from './types'

const IconWhatshotOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-66 0-127.5-20.5T240-160l58-58q42 29 88 43.5t94 14.5q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480H80q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80ZM159-243l163-163 120 100 198-198v104h80v-240H480v80h104L438-414 318-514 117-313q11 23 19.5 37.5T159-243Zm321-237Z" />
  </svg>
)

export { IconWhatshotOutlined as default }

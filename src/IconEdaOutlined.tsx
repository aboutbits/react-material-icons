import React from 'react'
import { IconProps } from './types'

export const IconEdaOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-480v-360q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v360h-80Zm160 0v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h-80Zm160 163v-483q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v436l-80 47ZM280-120h267q8 0 15-3.5t13-8.5l182-182-287 167-130-173H200v120q0 33 23.5 56.5T280-120Zm0 80q-66 0-113-47t-47-113v-200h260l110 147 190-111 90-52q21-12 44.5-10.5T858-411l63 47L632-75q-17 17-39 26t-46 9H280Zm-80-360h-80v-360q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v360Zm0-80h400-400Zm80 360h-80 375-295Z" />
  </svg>
)

import React from 'react'
import { IconProps } from './types.js'

export const IconSpeakerPhoneSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m338-620-58-58q41-39 92.5-60.5T480-760q56 0 107.5 21.5T680-678l-58 58q-29-29-65-44.5T480-680q-41 0-77 15.5T338-620ZM226-736l-56-56q63-62 142.5-95T480-920q88 0 167.5 33T790-792l-56 56q-51-50-117-77t-137-27q-71 0-137 27t-117 77Zm94 656v-480h320v480H320Zm240-80v-320H400v320h160Zm0 0H400h160Z" />
  </svg>
)

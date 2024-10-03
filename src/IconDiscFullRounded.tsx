import React from 'react'
import { IconProps } from './types.js'

export const IconDiscFullRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-300q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-140q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q98 0 183 44t141 122q10 14 5.5 30T791-660q-14 8-30 4t-27-18q-45-60-112-93t-142-33q-134 0-227 93t-93 227q0 134 93 227t227 93q42 0 82.5-11t76.5-32q15-8 31-6t26 16q10 14 7 30.5T686-138q-47 28-99.5 43T480-80Zm360-160q-17 0-28.5-11.5T800-280v-240q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v240q0 17-11.5 28.5T840-240Zm0 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80ZM480-480Z" />
  </svg>
)
